// Check if the array is palindrome or not?

function palindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return 'The Array is not palindrome';
    } else {
      left++;
      right--;
    }
  }
  return 'The Array is palindrome';
}

// Testing
let anArray = [1, 2, 3, 4, 3, 1];
let result = palindrome(anArray);
console.log(result);
