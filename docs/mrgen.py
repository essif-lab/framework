# ChatGPT intro: I'm trying to build a machine readable glossary (MRG) from markdown files. The structure of the files and other things is found in the SAF.yaml file, e.g. where these markdown files are located (`curatedir`), and where the MRG is to be written (`glossarydir`). Here is the script I use:

import argparse
import os
import yaml
import copy
from ruamel.yaml import YAML
import re
import glob
import datetime
import sys

# Create Terminology section

def construct_terminology_section(saf_data, version_tag):
    today = datetime.datetime.now().strftime("%Y%m%d")
    yaml = YAML()
    yaml.indent(mapping=2, sequence=4, offset=2)

    if not version_tag:
        raise Exception(f"Error: `version_tag` should have been provided, but is not")

    versions = saf_data.get("versions", [])
    found_version = None
    for version in versions:
        vsntag = version.get("vsntag", "")
        altvsntags = version.get("altvsntags", [])
        if vsntag == version_tag or version_tag in altvsntags:
            found_version = version
            break
    
    print(yaml.dump(found_version, sys.stdout))

    if not found_version:
        raise Exception(f"Error: Invalid version_tag provided: {version_tag}")

    terminology_section = {
        "scopetag": saf_data.get("scope", {}).get("scopetag"),
        "scopedir": saf_data.get("scope", {}).get("scopedir"),
        "curatedir": saf_data.get("scope", {}).get("curatedir"),
        "glossarydir": saf_data.get("scope", {}).get("glossarydir"),
        "website": saf_data.get("scope", {}).get("website"),
        "navpath": saf_data.get("scope", {}).get("navpath"),
        "license": saf_data.get("scope", {}).get("license", ""),
        "version": vsntag,
        "altversions": altvsntags,
        "date": today
    }

    if not terminology_section["scopetag"]:
        raise Exception("Error: 'scopetag' field missing in SAF.yaml.")

    if not terminology_section["scopedir"]:
        raise Exception("Error: 'scopedir' field missing in SAF.yaml.")

    if not terminology_section["curatedir"]:
        raise Exception("Error: 'curatedir' field missing in SAF.yaml.")

    # Set other missing fields to empty string
    terminology_section.setdefault("website", "")
    terminology_section.setdefault("navpath", "")
    terminology_section.setdefault("license", "")

    return terminology_section

# Create Scopes section

def construct_scopes_section(saf_data):
    # Code to generate the scopes section
    scopes_section = {
        "scopes": [] # Scopes section data
    }
    return scopes_section

# Create Entries section

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

    # Raise error if 'term' is missing
    if 'term' not in mrg_entry:
        error_messages.append(f"Error: 'term' field is missing in {md_file}")
        return None

    mrg_entry['scopetag'] = saf_data.get("scope", {}).get("scopetag")  # Use the actual scopetag value
    mrg_entry['locator'] = '<locator>/' + mrg_entry['term']
    mrg_entry['navurl'] = '<navurl>/' + mrg_entry['term']

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

    # Replace hoverText placeholders if it exists
    hover_text = mrg_entry.get('hoverText')

    if hover_text:
        def capitalize_first_letters(match):
            text = match.group(1)
            words = text.split()
            capitalized_words = [word.capitalize() if word.islower() else word for word in words]
            return ' '.join(capitalized_words)

        hover_text = re.sub(r'\[([^\]]+?)\]\(.*?@[^@]*\)', capitalize_first_letters, hover_text)

        mrg_entry['hoverText'] = hover_text

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

# Main program

def main(version_tag=None):
    saf_path = os.path.join(os.getcwd(), "SAF.yaml")
    if not os.path.exists(saf_path):
        print("Error: SAF.yaml file not found.")
        return

    with open(saf_path, "r", encoding="utf-8") as saf_file:
        saf_data = yaml.safe_load(saf_file)

    if version_tag is None:
        version_tag = saf_data.get("scope", {}).get("defaultvsn")

    print(f"Version tag: {version_tag}")

    scope_tag = saf_data.get("scope", {}).get("scopetag", "")

    # Generate YAML filename and path
    file_name = f"mrg.{scope_tag}.{version_tag}.yaml"

    # Check if glossarydir exists
    glossary_dir = saf_data.get("scope", {}).get("glossarydir", "")
    if not os.path.exists(os.path.join(os.getcwd(), glossary_dir)):
        print(f"Error: 'glossarydir' directory '{glossary_dir}' does not exist in {os.path.join(os.getcwd())}.")
        return
    
    # Create the full path for the MRG file
    file_path = os.path.join(os.getcwd(), glossary_dir, file_name)

    # Generate the contents of the MRG file
    mrg_terminology = construct_terminology_section(saf_data, version_tag)
    mrg_scopes = construct_scopes_section(saf_data)
    mrg_entries = construct_entries_section(saf_data)

    yaml_data = {
        "terminology": mrg_terminology,
        "scopes": mrg_scopes,
        "entries": mrg_entries
    }

    ruamel = YAML()
    ruamel.indent(mapping=2, sequence=4, offset=2)
    ruamel.dump(yaml_data, open(file_path, 'w', encoding='utf-8'))

    print(f"Generated YAML file: {file_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-v', '--version', help='Version tag', default=None)
    args = parser.parse_args()

    main(version_tag=args.version)
