import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  for(let i=0;i<arr.length;i++) {
    if(arr[i] == '--discard-prev') {
        arr.splice(i-1, 1);
    }
    if(arr[i] == '--discard-next') {
        arr.splice(i+1, 1);
    }
    if(arr[i] == '--double-next') {
        arr.splice(i, 0, arr[i+1]);
    }
    if(arr[i] == '--double-prev') {
        arr.splice(i, 0, arr[i-1]);
    }
}
let filter_arr = arr.filter(word => word != '--discard-prev' && word != '--discard-next' && word != '--double-next' && word != '--double-prev');
return filter_arr
}
