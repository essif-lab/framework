export interface Interpreter {
      interpert(match: RegExpMatchArray): Map<string,string>;
      getGlobalTermRegex() : RegExp;
      getLocalTermRegex() : RegExp;
      getType() :  string;
}