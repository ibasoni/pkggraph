import { filter } from "./filter";
import { find } from "./find";
import { read } from "./read";
import { PackageJson } from "./types";

(async () => {
  const rootPath = "../turbo-sample";
  const paths = await find({
    path: `${rootPath}/**/package.json`,
    ignore: `${rootPath}/**/node_modules/**`,
  });
  const objects = read<PackageJson>(paths);
  const names = filter(objects);
  console.log(names);
})();
