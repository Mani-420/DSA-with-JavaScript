// Shifting Zeros to the end in an array

function shiftingZerosToEnd(arr) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
  }

  return arr;
}

// // Testing

let anArray = [1, 0, 2, 0, 3, 0, 4, 5];
let newArray = shiftingZerosToEnd(anArray);
console.log('The new array is: ', newArray);

// Shifting 0's to the Start -------------------------------------------------

function shiftingZerosToStart(secArray) {
  let end = secArray.length - 1;

  for (let normal = secArray.length - 1; normal >= 0; normal--) {
    if (secArray[normal] !== 0) {
      secArray[end] = secArray[normal];
      end--;
    }
  }

  while (end >= 0) {
    secArray[end] = 0;
    end--;
  }

  return secArray;
}

// Testing

let secondArray = [1, 0, 2, 0, 3, 0, 4, 5];
let brandArray = shiftingZerosToStart(secondArray);
console.log('The new array is: ', brandArray);
