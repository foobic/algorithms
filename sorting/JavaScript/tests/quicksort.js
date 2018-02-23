'use strict';

const quickSort  = require('../quicksort.js');
const abstractTest  = require('./_test.js');

const quickTest = (array) => { abstractTest(array, quickSort); };

quickTest([3, 0, 1, 8, 7, 2, 5, 4, 6, 9]);

quickTest([1, 3, 5, 2, 4, 7, 8, 0, 9, 4, 10, 6]);

quickTest([2, 3, 4, 1]);


