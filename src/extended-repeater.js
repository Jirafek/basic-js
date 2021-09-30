import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  var word = '';
  let repeat = 0;
  let separ = '';
  let addit = '';
  let rep_add = 0;
  let add_sep = '';
  for(let key in options) {
    if(key === 'repeatTimes') {
      repeat+=options[key];
    }
    if(key === 'separator') {
      separ+=options[key];
    }
    if(key === 'addition') {
      addit+=options[key];
    }
    if(key === 'additionRepeatTimes') {
      rep_add+=options[key];
    }
    if(key === 'additionSeparator') {
      add_sep+=options[key];
    }
  }
  let full_separr = addit + add_sep;
  let full_sep_r = full_separr.repeat(rep_add);
  let arr = [];
  for(let i=0;i<full_sep_r.length;i++) {
    arr[i] = full_sep_r[i];
}
let n  = arr.length;
  for(let i=0;i<add_sep.length;i++) {
    arr.splice(n-1, 1); n--;
  }
  let additention = '';
  for(let i=0;i<n;i++) {
    additention += arr[i];
  }
  additention.replace(/undefined/g,'');
  word += str + additention + separ; let item = word.repeat(repeat); 

arr = [];
for(let i=0;i<item.length;i++) {
    arr[i] = item[i];
}
n = arr.length;
for(let i=0;i<separ.length;i++) {
    arr.splice(n-1, 1); n--;
  }
  let itm = '';
  for(let i=0;i<n;i++) {
    itm += arr[i];
  }

  return itm;
}
