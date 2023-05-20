import { expect, test } from "@jest/globals";
import { filter } from "./filter";
import { RawPackageJson } from "./types";

test("find files", () => {
  const objects: RawPackageJson[] = [
    {},
    { name: "ui" },
    { name: "tsconfig" },
    { name: "eslint-config-custom" },
    { name: "web" },
  ];
  const results = filter(objects);
  expect(results).toEqual(["ui", "tsconfig", "eslint-config-custom", "web"]);
});
