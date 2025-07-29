// Removing Duplicates from an Array

function removingDuplicates(arr) {
  let slow = 0;
  let realArray = [arr[slow]];

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      realArray.push(arr[fast]);
      arr[slow] = arr[fast];
    }
  }

  return realArray;
}

// Testing

let anArray = [1, 1, 2, 3, 4, 5, 6, 6, 7];
console.log('Original Array: ', anArray);
let newArray = removingDuplicates(anArray);
console.log('New array without duplicate elements is:', newArray);
