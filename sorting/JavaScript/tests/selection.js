'use strict';

const selectionSort  = require('../selection.js');
const abstractTest  = require('./_test.js');

const selectionTest = (array) => { abstractTest(array, selectionSort); };

selectionTest([3, 0, 1, 8, 7, 2, 5, 4, 6, 9]);

selectionTest([1, 3, 5, 2, 4, 7, 8, 0, 9, 4, 10, 6]);

selectionTest([2, 3, 3, 1, 2, 71, 1, 32]);
