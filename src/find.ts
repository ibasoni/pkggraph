import { glob } from "glob";

export const find = async ({ path, ignore }: Options) => {
  return await glob(path, {
    ignore,
  });
};

interface Options {
  path: string;
  ignore: string | string[];
}
