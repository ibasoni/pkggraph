import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Options } from "./types";

export const loadOptions = () => {
  const argv = yargs(hideBin(process.argv))
    .option("format", { choices: ["svg", "dot"], default: "svg" })
    .option("out", { default: "./graph" })
    .option("ignore", { default: [], array: true })
    .parse() as unknown as Options;

  return argv;
};
