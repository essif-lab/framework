export interface Converter {
      convert(data: string, file_name: string, glossary: Map<string, string>, properties: Map<string, string>): boolean;
}