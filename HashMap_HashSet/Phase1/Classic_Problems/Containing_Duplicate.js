// Method 1: Compare sizes
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

// Method 2: Early detection during iteration
function containsDuplicateEarly(nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true; // Found duplicate immediately
    }
    seen.add(num);
  }

  return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicateEarly([1, 2, 3, 4, 5]));

// Time Complexity:
// Time Complexity: O(n)
// Space Complexity: O(n)
