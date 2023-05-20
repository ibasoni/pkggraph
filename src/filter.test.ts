import { expect, test } from "@jest/globals";
import { filter } from "./filter";
import { RawPackageJson } from "./types";

test("filter", () => {
  const objects: RawPackageJson[] = [
    {},
    { name: "ui" },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    { name: "web" },
  ];
  const results = filter(objects);
  expect(results).toEqual([
    { name: "ui" },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    { name: "web" },
  ]);
});
