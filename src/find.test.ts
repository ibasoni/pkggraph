import { describe, expect, test } from "@jest/globals";
import { find } from "./find";

describe("find", () => {
  test("find files", async () => {
    const rootPath = "../turbo-sample";
    const results = await find({
      path: `${rootPath}/**/package.json`,
      ignore: `${rootPath}/**/node_modules/**`,
    });

    expect(results).toContain("../turbo-sample/package.json");
    expect(results).toContain("../turbo-sample/packages/ui/package.json");
    expect(results).toContain("../turbo-sample/packages/tsconfig/package.json");
    expect(results).toContain(
      "../turbo-sample/packages/eslint-config-custom/package.json"
    );
    expect(results).toContain("../turbo-sample/apps/web/package.json");
  });
});
