export declare class Resolver {
    private log;
    private output;
    private scope;
    private tmpLocalMrgFile;
    private mrgWritePath;
    private config?;
    private directory;
    private version?;
    private converter?;
    private interpreter?;
    private baseURL?;
    constructor({ outputPath, scopePath, directoryPath, vsn, configPath, interpreterType, converterType }: {
        outputPath: string;
        scopePath: string;
        directoryPath?: string;
        vsn?: string;
        configPath?: string;
        interpreterType?: string;
        converterType?: string;
    });
    private processConfig;
    private setOptionalParams;
    getDirectory(): string;
    getInterpreterType(): string;
    getConverterType(): string;
    private getMrgUrl;
    private readGlossary;
    private populateGlossary;
    private createOutputDir;
    private writeFile;
    private interpertAndConvert;
    resolve(): Promise<boolean>;
}
