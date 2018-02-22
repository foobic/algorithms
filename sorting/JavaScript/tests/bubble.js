'use strict';

const bubbleSort  = require('../bubble.js');
const abstractTest  = require('./_test.js');

const bubbleTest = (array) => { abstractTest(array, bubbleSort); };

bubbleTest([3, 0, 1, 8, 7, 2, 5, 4, 6, 9]);

bubbleTest([1, 3, 5, 2, 4, 7, 8, 0, 9, 4, 10, 6]);

bubbleTest([2, 3, 4, 1]);


