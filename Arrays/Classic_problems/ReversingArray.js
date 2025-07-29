// Check if the array is palindrome or not?

function reversingArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

// Testing
let anArray = [1, 2, 3, 4, 5, 6, 7, 8];
let reversedArray = reversingArray(anArray);
console.log(reversedArray);
