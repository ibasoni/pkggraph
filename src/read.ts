import fs from "fs";

export const read = <T extends Object>(paths: string[]): T[] => {
  return paths.map((path) => {
    let content = "";

    try {
      content = fs.readFileSync(path).toString();
    } catch (err) {
      throw new Error(`Unable to read file at: "${path}"`);
    }

    try {
      return JSON.parse(content);
    } catch (err) {
      throw new Error(`Unable to parse file at: "${path}"`);
    }
  });
};
