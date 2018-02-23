'use strict';

// Original: https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/

const swap = (array, firstIndex, secondIndex) => {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const partition = (array, left, right) => {
    let pivot   = array[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (array[i] < pivot) { // Asceding sorting
            i++;
        }
        while (array[j] > pivot) { // Asceding sorting
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (array, left, right) => {
    let index;
    if (array.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length - 1 : right;

        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}

module.exports = quickSort;
