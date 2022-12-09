import { Resolver } from './Resolver';
import { Logger } from "tslog";

const directoryPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests\\";
const outputPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests_converted\\";
const safPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\saf.yaml";

function main(): void {
      const log = new Logger();
      let resolver: Resolver = new Resolver(outputPath, safPath, directoryPath);
      if (resolver.resolve()) {
            log.info("Resolution complete...");
      } else {
            log.error("Failed to resolve terms, see logs....");
      }
}

main();