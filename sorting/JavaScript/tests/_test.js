'use strict';

const abstractTest = (array, sorting) => {
  console.log('>>>\nbefore: ', array);
  sorting(array);
  console.log('after: ', array);
};

module.exports = abstractTest;
