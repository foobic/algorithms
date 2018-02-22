'use strict';

const bubbleSort  = require('../bubble_sort.js');
const test = (array) => {
  console.log('>>>\nbefore: ', array);
  bubbleSort(array);
  console.log('after: ', array);
};

const arr1 = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];
test(arr1);

const arr2 = [1, 3, 5, 2, 4, 7, 2, 6, 3, 8, 0, 5, 7, 9, 4, 10, 6];
test(arr2);


