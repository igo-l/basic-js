import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(mode = true){
    this.mode = mode;
    this.alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ]
  }
  encrypt(str,key) {
    if (!str || !key){
      throw new Error('Incorrect arguments!');
    }
      while (key.length < str.length){
        key = key.repeat(2);
      }
      str = str.toUppreCase().split('');
      key = key.toUppreCase().split('');
      for (let i = 0, j = 0, z=0; i < str.length; i++){
        if (this.alphabet.indexOf(str[i])>=0){
          z = (this.alphabet.indexOf(str[i])+this.alphabet.indexOf(key[j])) % 26;
          str[i] = this.alphabet[z];
          j++;
        }
      }
      return this.mode ? str.join('') : str.reverse().join('');
    }

  decrypt(str, key) {
    if (!str || !key){
      throw new Error('Incorrect arguments!');
    }
    while (key.length < str.length){
        key = key.repeat(2);
      }
      str = str.toUppreCase().split('');
      key = key.toUppreCase().split('');
      for (let i = 0, j = 0, z=0; i < str.length; i++){
        if (this.alphabet.indexOf(str[i])>=0){
          z = (this.alphabet.indexOf(str[i])-this.alphabet.indexOf(key[j]+26)) % 26;
          str[i] = this.alphabet[z];
          j++;
        }
      }
      return this.mode ? str.join('') : str.reverse().join('');
  }
}
