export interface Converter {
      convert(data: string, glossary: Map<string, string>, properties: Array<Map<string, string>>): string;
}