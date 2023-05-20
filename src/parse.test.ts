import { expect, test } from "@jest/globals";
import { parse } from "./parse";
import { PackageJson } from "./types";

test("parse deps", () => {
  const objects: PackageJson[] = [
    {
      name: "ui",
      devDependencies: {
        tsconfig: "*",
        "eslint-config-custom": "*",
        react: "latest",
      },
    },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    {
      name: "web",
      dependencies: { ui: "*", tsconfig: "*", "eslint-config-custom": "*" },
    },
  ];
  const results = parse(objects);
  expect(results).toEqual({
    ui: ["tsconfig", "eslint-config-custom"],
    "eslint-config-custom": [],
    tsconfig: [],
    web: ["ui", "tsconfig", "eslint-config-custom"],
  });
});
