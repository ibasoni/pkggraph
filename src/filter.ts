import type { PackageJson, RawPackageJson } from "./types";

export const filter = ({ objects, ignore }: FilterOptions): PackageJson[] => {
  return objects
    .filter((pkg) => !!pkg.name)
    .filter((pkg) => !ignore.includes(pkg.name!)) as PackageJson[];
};

interface FilterOptions {
  ignore: string[];
  objects: RawPackageJson[];
}
