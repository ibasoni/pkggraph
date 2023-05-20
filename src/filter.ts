import type { PackageJson, RawPackageJson } from "./types";

export const filter = (objects: RawPackageJson[]): PackageJson[] => {
  return objects.filter((pkg) => !!pkg.name) as PackageJson[];
};
