import { expect, test } from "@jest/globals";
import fs from "fs";
import { Data } from "../types";
import { render } from "./dot";

describe("dot renderer", () => {
  afterEach(() => {
    fs.unlinkSync("./graph.svg");
  });

  test("dot renderer", async () => {
    await render({
      ui: ["eslint-config-custom", "tsconfig"],
      tsconfig: [],
      "eslint-config-custom": [],
      web: ["ui", "eslint-config-custom", "tsconfig"],
    });
    const fileContent = fs.readFileSync("./graph.svg").toString();
    expect(fileContent).toContain("<svg");
    expect(fs.existsSync("./graph.svg")).toBe(true);
  });
});

test("renderer throws an error", async () => {
  await expect(() => render("bad input" as unknown as Data)).rejects.toThrow();
});
