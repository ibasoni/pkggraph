import { describe, expect, test } from "@jest/globals";
import { read } from "./read";
import { PackageJson } from "./types";
import fs from "fs";

describe("read", () => {
  test("read paths", () => {
    const paths = [
      "../turbo-sample/package.json",
      "../turbo-sample/packages/ui/package.json",
      "../turbo-sample/packages/tsconfig/package.json",
      "../turbo-sample/packages/eslint-config-custom/package.json",
      "../turbo-sample/apps/web/package.json",
    ];
    const objects = read<PackageJson>(paths);
    expect(objects.map((o) => o.name)).toEqual([
      undefined,
      "ui",
      "tsconfig",
      "eslint-config-custom",
      "web",
    ]);
  });

  test("throw an error when the file can't be found", () => {
    removeFile();
    expect(() => read(["23234234.234sdflkj.json"])).toThrow(
      new Error('Unable to read file at: "23234234.234sdflkj.json"')
    );
  });

  test("throw an error when the file can't be parsed", () => {
    removeFile();
    createFile();
    expect(() => read([tmpFileName])).toThrow(
      new Error(`Unable to parse file at: "${tmpFileName}"`)
    );

    removeFile();
  });
});

// helpers
const tmpFileName = "./23234234.234sdflkj.json";

const removeFile = () => {
  // remove the file
  try {
    fs.unlinkSync(tmpFileName);
  } catch {}
};

const createFile = () => {
  // create a temp file for the test
  fs.writeFileSync(tmpFileName, "slkjfhlsdfkghj");
};
