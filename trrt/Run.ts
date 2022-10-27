import { Resolver } from './Resolver';

const directoryPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests";
const outputPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests_converted";
const safPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\saf.yaml";

function main(): void {
      let resolver: Resolver = new Resolver(outputPath, safPath, directoryPath);
      if (resolver.resolve_terms()) {
            console.log("Done...");
      } else {
            console.log("Failed to resolve terms, see logs....");
      }
}

main();