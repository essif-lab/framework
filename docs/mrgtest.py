import argparse
import datetime
import os
import glob
import re
import yaml
import sys
from ruamel.yaml import YAML

# SECTION: Data Processing Functions

def process_markdown_file(md_file, error_messages):
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find front matter
    start_index = content.find('---')
    end_index = content.find('---', start_index + 3)

    if start_index == -1 or end_index == -1:
        error_messages.append(f"Error: No YAML front matter found in {md_file}")
        return None

    front_matter = content[start_index+3:end_index].strip()

    # Construct MRG entry
    yaml = YAML()
    try:
        mrg_entry = yaml.load(front_matter)
    except Exception as e:
        error_messages.append(f"Error in YAML front matter of {md_file}: {str(e)}")
        return None

    if not isinstance(mrg_entry, dict):
        error_messages.append(f"Error: Invalid YAML front matter in {md_file}")
        return None

    mrg_entry['scopetag'] = '<scopetag>'
    mrg_entry['locator'] = '<locator>/' + mrg_entry['id']
    mrg_entry['navurl'] = '<navurl>/' + mrg_entry['id']

    # Find heading tags in the markdown body
    body_content = content[end_index+3:]
    heading_tags = []
    heading_regex = r'^(?P<heading_level>#+)\s*(?P<heading_text>.*?)\s*(?:{#(?P<heading_id>[A-Za-z0-9-_]+)})?$'

    for match in re.finditer(heading_regex, body_content, re.MULTILINE):
        heading_level = len(match.group('heading_level'))
        heading_text = match.group('heading_text')
        heading_id = match.group('heading_id')

        if heading_id:
            heading_id = heading_id.strip()
        else:
            heading_id = generate_heading_id(heading_text)

        if heading_id == '':
            heading_id = None

        heading_tags.append(heading_id)

    if heading_tags:
        mrg_entry['headingids'] = heading_tags

    # Replace glossaryText placeholders
    glossary_text_match = re.findall(r'%%(.*?)\^(.*?)%%', mrg_entry.get('glossaryText', ''))
    for match in glossary_text_match:
        placeholder = f"%%{match[0]}^{match[1]}%%"
        replacement = f"[{match[0]}](@)"
        mrg_entry['glossaryText'] = mrg_entry.get('glossaryText', '').replace(placeholder, replacement)

    return mrg_entry


def generate_heading_id(heading_text):
    generated_id = heading_text.lower()
    generated_id = re.sub(r'\W+', ' ', generated_id)
    generated_id = generated_id.replace(' ', '-')
    generated_id = re.sub(r'-{2,}', '-', generated_id)
    generated_id = generated_id.strip('-')
    if generated_id == '':
        return None
    return generated_id


def process_directory(curatedir):
    if not os.path.exists(curatedir):
        print(f"Error: Directory '{curatedir}' does not exist.")
        return []

    markdown_files = glob.glob(os.path.join(curatedir, '*.md'))

    if not markdown_files:
        print(f"Error: No Markdown files found in directory '{curatedir}'.")
        return []

    mrg_entries = []
    error_messages = []
    for md_file in markdown_files:
        mrg_entry = process_markdown_file(md_file, error_messages)
        if mrg_entry:
            mrg_entries.append(mrg_entry)

    if error_messages:
        print("\n".join(error_messages))

    return mrg_entries

def write_yaml_file(mrg_entries):
    today = datetime.datetime.now().strftime("%Y%m%d")
    yaml = YAML()
    yaml.indent(mapping=2, sequence=4, offset=2)

    saf_path = os.path.join(os.getcwd(), "SAF.yaml")
    if os.path.exists(saf_path):
        with open(saf_path, "r", encoding="utf-8") as saf_file:
            saf_data = yaml.load(saf_file)
        
        terminology_section = {
            "scopetag": saf_data.get("scope", {}).get("scopetag", ""),
            "scopedir": saf_data.get("scope", {}).get("scopedir", ""),
            "curatedir": saf_data.get("scope", {}).get("curatedir", ""),
            "vsntag": saf_data.get("scope", {}).get("vsntag", ""),
            "altvsntags": saf_data.get("scope", {}).get("altvsntags", ""),
            "license": saf_data.get("scope", {}).get("license", ""),
            "date": today,
            "version": {}
        }

        # Add version specifications to terminology_section
        version_tag = terminology_section["vsntag"]
        versions = saf_data.get("versions", [])
        for version in versions:
            vsntag = version.get("vsntag", "")
            altvsntags = version.get("altvsntags", [])
            if vsntag == version_tag or version_tag in altvsntags:
                terminology_section["version"] = version
                break

        mrg = {
            "terminology": terminology_section,
            "scopes": [],
            "entries": mrg_entries
        }

        yaml.dump(mrg, open("mrg.scopetag.vsntag.yaml", "w", encoding="utf-8"))
    else:
        print(f"Error: SAF.yaml file not found.")

# SECTION: Main Execution

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-v', '--version', help='Version tag', default=None)
    args = parser.parse_args()

    curatedir = "terms"  # Specify the curated directory here

    print(f"Processing files in directory: {curatedir}")

    mrg_entries = process_directory(curatedir)
    if mrg_entries:
        if len(mrg_entries) > 0:
            write_yaml_file(mrg_entries)
            print('Processing complete.')
        else:
            print('No MRG entries found.')
    else:
        print('Error processing MRG entries.')

if __name__ == '__main__':
    main()
