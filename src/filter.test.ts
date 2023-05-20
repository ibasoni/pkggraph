import { expect, test } from "@jest/globals";
import { filter } from "./filter";
import { RawPackageJson } from "./types";

test("filter empty names", () => {
  const objects: RawPackageJson[] = [
    {},
    { name: "ui" },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    { name: "web" },
  ];
  const results = filter({ objects, ignore: [] });
  expect(results).toEqual([
    { name: "ui" },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    { name: "web" },
  ]);
});

test('filter by "ignore" option', () => {
  const objects: RawPackageJson[] = [
    {},
    { name: "ui" },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    { name: "web" },
  ];
  const results = filter({ objects, ignore: ["ui", "tsconfig"] });
  expect(results).toEqual([{ name: "eslint-config-custom" }, { name: "web" }]);
});
