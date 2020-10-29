const glob = require('glob');
const fs = require('fs');
const parseMD = require('parse-md').default;
const path = require("path");

const TERMS_DIR = './docs/terms/'
const glossaryPath = './docs/glossary.md';
const searchTerm = '---';


String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substring(index, this.length);
  }
  return string + this;
};

function getRelativePath(source,target) {
  // calculate relative path from each file's parent dir
  const sourceDir = source.substr(0, source.lastIndexOf("/"));
  const targetDir = target.substr(0, target.lastIndexOf("/"));
  const relative_url = path.relative(sourceDir, targetDir);
  // construct the final url by appending the target's filename
  // if the relative url is empty, it means that the referenced
  // term is in the same dir, so add a `.`
  return relative_url === '' ? '.' + target.substr(target.lastIndexOf("/")) : relative_url + target.substr(target.lastIndexOf("/"));
}

function getAutoIncludeStatements(filePath) {
  var filePath = path.dirname(filePath);
  var absoluteTermPath = path.resolve('./src/components');
  // Find the relative path between the file to be modified and the Term plugin
  var relativePath = path.relative(filePath, absoluteTermPath);
  var importTerms = `\n\nimport { Term } from '${relativePath}'\n`;

  return importTerms
}

async function getHoverText(filePath) {
  let data = await fs.promises.readFile(filePath, 'utf8')
  let { metadata } = parseMD(data)
  return metadata.hoverText
}

function getTermTitle(filePath) {
  let data = fs.readFileSync(filePath, 'utf8')
  let { metadata } = parseMD(data)
  return metadata.title
}

var getDirectories = function (src, callback) {
  glob(src, callback);
};

async function parser(err, files) {
  if (err) {
    console.log('Error', err);
  } else {
    // Iterate through the .md(x) files
    for(let filepath of files.filter(filepath => filepath != './docs/terminology-plugin-instructions.md')) {
      console.log('Filepath =', filepath);
      let content = '';
      try {
        content = await fs.promises.readFile(filepath, 'utf8')
      } catch(err) {
        console.log(err)
      }
      if (err) throw err;
      // Regex for finding the pattern:  %token_1,token_2%
      reg = /\%%.*?\|.*?\%%/g;
      // If there is at least one match between the content of the file and
      // the regex, proceed
      if ((regex_matches = content.match(reg)) !== null) {
        for(let regex_match of regex_matches) {
          var token = regex_match.split('|');

          // Find the path of the term
          var reference = (token[1]).replace(/[%" ]/g, '');
          var text = (token[0]).replace(/[%"]/g, '');

          let referencePath = TERMS_DIR + reference + '.md';
          // Get the popup text for the term
          let hoverText = await getHoverText(referencePath);

          const current_file_path = path.resolve(process.cwd(), filepath);
          const term_path = path.resolve(process.cwd(), TERMS_DIR, reference);
          const new_final_url = getRelativePath(current_file_path, term_path);
          if (hoverText === undefined) {
            var new_text = ('<Term reference="' + new_final_url + '">' +
                text + '</Term>');
          } else {
            var new_text = ('<Term popup="' + hoverText + '" reference="' +
                new_final_url + '">' + text + '</Term>');
          }
          content = content.replace(regex_match, new_text);
        }
        // Find the index of the 2nd occurrence of '---'
        var indexOfSecond = content.indexOf(searchTerm, 1);
        // Add the import statement
        var autoIncludeStatements = getAutoIncludeStatements(filepath);
        content = content.insert(indexOfSecond + 3, autoIncludeStatements);

        // Write the file with the updated content
        fs.writeFile(filepath, content, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      }
    }
  }
}

async function getGlossaryTerms(files) {
  //we will save here all the required data
  let arr = [];
  for(let filepath of files) {
    let content = '';
    try {
      content = await fs.promises.readFile(filepath, 'utf8');
    } catch(err) {
      console.log(err);
    }
    //gather all metadata
    let { metadata } = parseMD(content)
    //keep only the required keys
    if (metadata.title && (metadata.type == "concept" || metadata.type == "term")) {
      let glossaryContent = metadata.glossaryText;

      if (glossaryContent) {
        // Regex for finding the pattern:  %token_1,token_2%
        reg = /\%%.*?\^.*?\%%/g;
        // If there is at least one match between the content of the file and
        // the regex, proceed
        if ((regex_matches = glossaryContent.match(reg)) !== null) {
          for(let regex_match of regex_matches) {
            var token = regex_match.split('^');

            // Find the path of the term
            var reference = (token[1]).replace(/[%" ]/g, '');
            var text = (token[0]).replace(/[%"]/g, '');

            let referencePath = TERMS_DIR + reference + '.md';
            // Get the popup text for the term
            let hoverText = await getHoverText(referencePath);

            const current_file_path = path.resolve(process.cwd(), filepath);
            const term_path = path.resolve(process.cwd(), TERMS_DIR, reference);
            const new_final_url = getRelativePath(current_file_path, term_path);
            if (hoverText === undefined) {
              var new_text = ('<Term reference="' + new_final_url + '">' +
                  text + '</Term>');
            } else {
              var new_text = ('<Term popup="' + hoverText + '" reference="' +
                  new_final_url + '">' + text + '</Term>');
            }
            glossaryContent = glossaryContent.replace(regex_match, new_text);
          }
        }
      }

      arr.push({
        title: metadata.title,
        hoverText: metadata.hoverText,
        glossaryText: glossaryContent,
        filepath: filepath.slice(1,-3),
      });
    } else {
      console.log(metadata.type);
    }
  }
  return arr;
}

function generateGlossary(data) {
  //append all markdown terms in a variable
  let content = "";
  data.forEach(item => {
    if (item.title !== undefined) {
      if (item.hoverText === undefined) {
        content = content +  `\n\n- **[${item.title}](${item.filepath})**\n`;
      } else {
        content = content +  `\n\n- **[${item.title}](${item.filepath})**: ${item.glossaryText}\n`;
      }
    }
  })
  fs.readFile(glossaryPath, 'utf8', function(err, glossaryContent) {
    if (err) throw err;
    var indexOfSecond = glossaryContent.indexOf(searchTerm, 1);
    newContent = glossaryContent.slice(0, indexOfSecond + 3);
    var autoIncludeStatements = getAutoIncludeStatements(glossaryPath);
    newContent = newContent + autoIncludeStatements + content;

    // Write the list of terms to the glossary page
    fs.writeFile(glossaryPath, newContent, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

async function parseGlossary(err, files) {
  if (err) {
    console.log(err)
    return -1
  }
  //get all terms in an array of objects
  const data = await getGlossaryTerms(files);
  //sort them alphabeteically
  data.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0));
  //write the glossary.md file
  generateGlossary(data);
}

module.exports = function (context, options) {
  return {
    name: 'terminology-parser',
    extendCli(cli) {
      cli
        .command('parse')
        .description('Parse all md files to replace terms')
        .action(() => {
          console.log('Replacing patterns with <Term />');
          getDirectories('./docs/**/*.md*', parser);
        });
      cli
        .command('glossary')
        .description('Generate a glossary of terms')
        .action(() => {
          console.log('Alphabetical list of terms');
          getDirectories('./docs/terms/*.md*', parseGlossary);
        });
    },
  };
};
