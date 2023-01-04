import { Converter } from "./Converter";
export declare class HTTPConverter implements Converter {
    private log;
    constructor();
    getType(): string;
    convert(glossary: Map<string, string>, properties: Map<string, string>): string;
}
