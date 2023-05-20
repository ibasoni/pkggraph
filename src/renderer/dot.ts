import fs from "fs";
import { graphviz } from "node-graphviz";
import type { Data, Options } from "../types";

const jsonToDot = require("json-to-dot");

export const render = async ({ data, out, format }: DotRenderOptions) => {
  let fileContent = "";
  try {
    const dot = (jsonToDot as any)(data);

    if (format === "dot") {
      fileContent = dot;
    } else {
      fileContent = await graphviz.dot(dot, "svg");
    }
    fs.writeFileSync(`${out}.${format}`, fileContent);
  } catch (err) {
    throw new Error("Unable to render file");
  }
};

export interface DotRenderOptions extends Omit<Options, "ignore"> {
  data: Data;
}
