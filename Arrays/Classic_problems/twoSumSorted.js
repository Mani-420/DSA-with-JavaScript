// --------------------------------- Opposite Directions ---------------------------------\\

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

const sortedArray = [1, 2, 3, 4, 6, 8, 9, 14, 15];
const target = 25;
result = twoSumSorted(sortedArray, target);
console.log('Two Sum Result:', result);
