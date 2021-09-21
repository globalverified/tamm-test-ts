import fs from 'fs';

/**
 * Function to check if the provided file path exists or not.
 * @param path {String}
 * @returns {boolean}
 */
const checkFile = async (path: string) => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (err) {
    return false;
  }
};

export default checkFile;
