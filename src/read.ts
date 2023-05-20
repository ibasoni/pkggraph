import fs from "fs";
import path from "path";

export const read = <T extends Object>(paths: string[]): T[] => {
  return paths.map((p) => {
    let content = "";
    const fullPath = path.resolve(".", p);

    try {
      content = fs.readFileSync(fullPath).toString();
    } catch (err) {
      throw new Error(`Unable to read file at: "${fullPath}"`);
    }

    try {
      return JSON.parse(content);
    } catch (err) {
      throw new Error(`Unable to parse file at: "${p}"`);
    }
  });
};
