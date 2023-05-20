import fs from "fs";

export const tmpFileName = "./test-package-json-mock.json";

export const removeFile = () => {
  // remove the file
  try {
    fs.unlinkSync(tmpFileName);
  } catch {}
};

export const createFile = () => {
  // create a temp file for the test
  fs.writeFileSync(tmpFileName, tmpFileName);
};
