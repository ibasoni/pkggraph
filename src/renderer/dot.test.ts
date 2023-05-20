import { expect, test } from "@jest/globals";
import fs from "fs";
import { Data } from "../types";
import { DotRenderOptions, render } from "./dot";

describe("dot renderer", () => {
  afterEach(() => {
    try {
      fs.unlinkSync("./graph.svg");
    } catch {}
    try {
      fs.unlinkSync("./graph.dot");
    } catch {}
  });

  test("render svg", async () => {
    await render({
      data: {
        ui: ["eslint-config-custom", "tsconfig"],
        tsconfig: [],
        "eslint-config-custom": [],
        web: ["ui", "eslint-config-custom", "tsconfig"],
      },
      out: "./graph",
      format: "svg",
    });
    const fileContent = fs.readFileSync("./graph.svg").toString();
    expect(fileContent).toContain("<svg");
    expect(fs.existsSync("./graph.svg")).toBe(true);
  });

  test("render dot", async () => {
    await render({
      data: {
        ui: ["eslint-config-custom", "tsconfig"],
        tsconfig: [],
        "eslint-config-custom": [],
        web: ["ui", "eslint-config-custom", "tsconfig"],
      },
      out: "./graph",
      format: "dot",
    });
    expect(fs.existsSync("./graph.dot")).toBe(true);
  });
});

test("renderer throws an error", async () => {
  await expect(() =>
    render("bad input" as unknown as DotRenderOptions)
  ).rejects.toThrow();
});
