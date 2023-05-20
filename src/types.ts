export interface PackageJson {
  name: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

export interface RawPackageJson {
  name?: string;
}

export type Data = Record<string, string[]>;

export interface Options {
  format: "svg" | "dot";
  out: string;
  ignore: string[];
}
