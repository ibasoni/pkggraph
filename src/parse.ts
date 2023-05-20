import type { PackageJson, Data } from "./types";

export const parse = (pkgs: PackageJson[]): Data => {
  const names = pkgs.map((pkg) => pkg.name);

  return pkgs.reduce((acc, pkg) => {
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };
    const children = Object.keys(allDeps).filter((dep) => names.includes(dep));
    acc[pkg.name] = children;
    return acc;
  }, {} as Record<string, string[]>);
};
