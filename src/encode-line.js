const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
 let result = '';
 let n = 1;
 if (str.length > 0){
   for (let i = 0; i< str.length; i++){
     if (str[i+1] === str[i]){
       n++;
     } else if (n > 1){
       result += `${n}${str[i]}`;
       n = 1;
     } else{
       result +=str[i];
     }
   }
 }
 return result;
}

module.exports = {
  encodeLine
};
