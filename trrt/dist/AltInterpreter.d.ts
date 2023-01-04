import { Interpreter } from "./Interpreter";
export declare class AltInterpreter implements Interpreter {
    private termRegexGlobal;
    private termRegexLocal;
    constructor();
    getType(): string;
    interpert(match: RegExpMatchArray): Map<string, string>;
    getGlobalTermRegex(): RegExp;
    getLocalTermRegex(): RegExp;
}
