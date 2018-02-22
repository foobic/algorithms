'use strict';

const insertionSort  = require('../insertion.js');
const abstractTest  = require('./_test.js');

const insertionTest = (array) => { abstractTest(array, insertionSort); };

insertionTest([3, 0, 1, 8, 7, 2, 5, 4, 6, 9]);

insertionTest([1, 3, 5, 2, 4, 7, 8, 0, 9, 4, 10, 6]);

insertionTest([2, 3, 4, 1]);
