import re
import os
from ruamel.yaml import YAML
import glob

def process_markdown_file(md_file, saf_data, error_messages):
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

    # Raise error if 'id' is missing
    if 'id' not in mrg_entry:
        error_messages.append(f"Error: 'id' field is missing in {md_file}")
        return None

    mrg_entry['scopetag'] = saf_data.get("scope", {}).get("scopetag")  # Use the actual scopetag value
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

    # Replace glossaryText placeholders if it exists
    glossary_text = mrg_entry.get('glossaryText')

    if glossary_text:
        glossary_text_match = re.findall(r'%%(.*?)\^(.*?)%%', glossary_text)
        for match in glossary_text_match:
            show_text = match[0]
            ref_text = match[1]
            placeholder = f"%%{show_text}^{ref_text}%%"
            replacement = f"[{show_text}](@)"
            glossary_text = glossary_text.replace(placeholder, replacement)
        mrg_entry['glossaryText'] = glossary_text

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

def construct_entries_section(saf_data):
    directory = saf_data.get("scope", {}).get("curatedir")
    if not directory:
        print("Error: 'curatedir' field missing in SAF.yaml.")
        return

    if not os.path.exists(directory):
        print(f"Error: Directory '{directory}' does not exist.")
        return []

    print(f"Processing files in directory: {directory}")

    markdown_files = glob.glob(os.path.join(directory, '*.md'))

    if not markdown_files:
        print(f"Error: No Markdown files found in directory '{directory}'.")
        return []

    mrg_entries = []
    error_messages = []

    for md_file in markdown_files:
        mrg_entry = process_markdown_file(md_file, saf_data, error_messages)
        if mrg_entry:
            mrg_entries.append(mrg_entry)

    if error_messages:
        print("\n".join(error_messages))

    return mrg_entries
