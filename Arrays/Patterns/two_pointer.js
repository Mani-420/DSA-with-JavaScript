// --------------------------------- Opposite Directions ---------------------------------\\

// function twoSumSorted(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[left] + arr[right];

//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return [-1, -1];
// }

// const sortedArray = [1, 2, 3, 4, 6, 8, 9, 14, 15];
// const target = 25;
// result = twoSumSorted(sortedArray, target);
// console.log('Two Sum Result:', result);

// --------------------------------- Same Directions ---------------------------------\\
// ------------------ Slow Pointer and Fast Pointer ------------------\\
// To Check if duplicates are present or not

function checkDuplicates(arr) {
  let slow = 0;

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      arr[slow] = arr[fast];
    } else {
      return 'Duplicate Elements are present';
    }
  }
  return 'No Duplicates Elements are present';
}

let anArray = [1, 2, 3, 4, 5];
let result = checkDuplicates(anArray);
console.log(result);
