export interface Interpreter {
      interpert(match: RegExpMatchArray): Map<string,string>;
      getTermRegex() : RegExp;
}