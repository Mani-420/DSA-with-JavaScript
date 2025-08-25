function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  return -1; // Not found
}

// Example usage
let nums = [1, 3, 5, 7, 9, 12, 15];
console.log(binarySearch(nums, 15)); // 6
console.log(binarySearch(nums, 2)); // -1
