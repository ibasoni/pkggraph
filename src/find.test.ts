import { describe, expect, test } from "@jest/globals";
import { find } from "./find";

describe("find", () => {
  test("find files", async () => {
    const rootPath = "../turbo-sample";
    const results = await find({
      path: `${rootPath}/**/package.json`,
      ignore: `${rootPath}/**/node_modules/**`,
    });
    expect(results).toEqual([
      "../turbo-sample/package.json",
      "../turbo-sample/packages/ui/package.json",
      "../turbo-sample/packages/tsconfig/package.json",
      "../turbo-sample/packages/eslint-config-custom/package.json",
      "../turbo-sample/apps/web/package.json",
    ]);
  });
});
