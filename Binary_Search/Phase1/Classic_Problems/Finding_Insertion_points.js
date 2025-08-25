function searchInsertPosition(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // At the end, left is the correct insertion index
  return left;
}

// Example usage
let nums2 = [1, 3, 5, 6];
console.log(searchInsertPosition(nums2, 5)); // 2
console.log(searchInsertPosition(nums2, 2)); // 1
console.log(searchInsertPosition(nums2, 7)); // 4
console.log(searchInsertPosition(nums2, 0)); // 0
