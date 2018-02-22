'use strict';


const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) { // ascending sorting
        min = j;
      }
    }
    if (min === i) continue;
    const tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;
  }
};

module.exports = selectionSort;
