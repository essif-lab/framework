export interface Converter {
      convert(glossary: Map<string, string>, properties: Map<string, string>): string;
      getType() : string;
}