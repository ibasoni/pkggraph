import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Options } from "./types";

export const loadOptionsFromCLI = () => {
  const argv = yargs(hideBin(process.argv))
    .option("format", { choices: ["svg", "dot"], default: "svg" })
    .option("out", { default: "./graph" })
    .parse() as unknown as Options;

  return argv;
};
