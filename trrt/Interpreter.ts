import { Converter } from "./Converter";

export interface Interpreter {
      interpertAndConvert(converter: Converter, glossary : Map<string, string>, file_name: string, direcoty_path: string): boolean;
}