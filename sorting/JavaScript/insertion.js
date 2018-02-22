'use strict';

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let hole = i;
    while (hole > 0 && array[hole - 1] > value) { // ascending sorting
      array[hole] = array[hole - 1];
      hole--;
    }
    array[hole] = value;
  }
};

module.exports = insertionSort;

