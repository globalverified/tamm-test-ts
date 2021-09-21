import fs from 'fs';

//check file existance
const checkFile = async (path: string) => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (err) {
    return false;
  }
};

export default checkFile;
