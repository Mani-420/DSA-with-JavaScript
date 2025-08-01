// -------------------- Longest Subarray with Sum <= K -------------------

function longestSubarrayWithSumK(arr2, k) {
  let left = 0;
  let currentSum = 0;
  let maxLength = 0;

  for (let right = 0; right < arr2.length; right++) {
    currentSum += arr2[right];

    while (currentSum > k && left <= right) {
      currentSum -= arr2[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// Testing
let secArray = [1, 2, 1, 0, 1, 1, 0];
let longestSubarraySum = longestSubarrayWithSumK(secArray, 4);
console.log('Longest subarray with Target Sum', longestSubarraySum);
