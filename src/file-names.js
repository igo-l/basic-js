const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let resArr = [];
  for (let i of names) {
    if (resArr.indexOf(i) !== -1){
      let k = 1;
      while (resArr.indexOf(`${i}(${k})`) !== -1){
          k += 1;
      }
      resArr.push(`${i}(${k})`);
    } else{
      resArr.push(i);
    }
  }
  return resArr;
}

module.exports = {
  renameFiles
};
