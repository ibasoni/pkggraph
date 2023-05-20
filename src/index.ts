#! /usr/bin/env node
import { loadOptions } from "./cli";
import { filter } from "./filter";
import { find } from "./find";
import { parse } from "./parse";
import { read } from "./read";
import { render } from "./renderer/dot";
import type { Options, PackageJson } from "./types";
import path from "path";

const run = async ({ out, format, ignore }: Options) => {
  const rootPath = path.resolve(".");
  const paths = await find({
    path: `${rootPath}/**/package.json`,
    ignore: `${rootPath}/**/node_modules/**`,
  });
  if (paths.length === 0) {
    console.error("No package.json files found in target");
    process.exit(1);
  }

  const objects = read<PackageJson>(paths);
  const pkgs = filter({ objects, ignore });
  const data = parse(pkgs);
  render({ data, out, format });
};

const options = loadOptions();
console.log(options);
run(options);

export { find, parse, read, render, filter };
