import argparse
import os
import yaml
import copy
from ruamel.yaml import YAML

import mrgen_terminology
import mrgen_scopes
import mrgen_entries

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
    mrg_terminology = mrgen_terminology.construct_terminology_section(saf_data, version_tag)
    mrg_scopes = mrgen_scopes.construct_scopes_section(saf_data)
    mrg_entries = mrgen_entries.construct_entries_section(saf_data)

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
