import type { RawPackageJson } from "./types";

export const filter = (objects: RawPackageJson[]) => {
  return objects.filter((pkg) => !!pkg.name).map((pkg) => pkg.name);
};
