'use strict';

let myArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g'];

const binarySearch = (item, array) => {
  let min  = 0;
  let max = myArray.length - 1;
  while(min <= max)
  {
    let mid = Math.floor((max + min) / 2);
    let guess = array[mid];

    if(guess === item) {  return item; }
    else if(guess < item) { min = mid + 1;  }
    else if(guess > item) { max = mid - 1; }
    else { return -1; }

  }
}

const result = binarySearch('d', myArray);
console.log(`Result: ${result}`);