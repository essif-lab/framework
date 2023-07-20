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

    curatedir = saf_data.get("scope", {}).get("curatedir")
    if not curatedir:
        print("Error: 'curatedir' field missing in SAF.yaml.")
        return

    if version_tag is None:
        version_tag = saf_data.get("scope", {}).get("defaultvsn")

    print(f"Processing files in directory: {curatedir}")
    print(f"Version tag: {version_tag}")

    mrg_terminology = mrgen_terminology.construct_terminology_section(version_tag, saf_data)
    mrg_scopes = mrgen_scopes.construct_scopes_section()
    mrg_entries = mrgen_entries.construct_entries_section(curatedir)

    # Generate YAML file
    file_name = f"mrg.{mrg_terminology['scopetag']}.{version_tag}.yaml"
    file_path = os.path.join(os.getcwd(), file_name)

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
