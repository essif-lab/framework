import datetime
import sys
import os
from ruamel.yaml import YAML

def construct_terminology_section(version_tag, saf_data):
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
        "vsntag": saf_data.get("scope", {}).get("vsntag", ""),
        "altvsntags": saf_data.get("scope", {}).get("altvsntags", ""),
        "license": saf_data.get("scope", {}).get("license", ""),
        "version": found_version,
        "date": today
    }

    if not terminology_section["scopetag"]:
        raise Exception("Error: 'scopetag' field missing in SAF.yaml.")

    if not terminology_section["scopedir"]:
        raise Exception("Error: 'scopedir' field missing in SAF.yaml.")

    if not terminology_section["curatedir"]:
        raise Exception("Error: 'curatedir' field missing in SAF.yaml.")

    # Set other missing fields to empty string
    terminology_section.setdefault("vsntag", "")
    terminology_section.setdefault("altvsntags", "")
    terminology_section.setdefault("license", "")

    return terminology_section
