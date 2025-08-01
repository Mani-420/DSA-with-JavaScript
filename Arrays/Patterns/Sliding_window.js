// --------------------------------- Sliding Window Technique ---------------------------------\\
// ------------------ Fixed Window Size ----------------------------\\

// -------------------- Maximum Subarray -------------------
function slidingWindow(arr, k) {
  if (arr.length < k) return -1;

  // Calculate First Window Sum
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Calculate the sum of next windows while sliding
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    if (maxSum < windowSum) {
      maxSum = windowSum;
    }
  }
  return maxSum;
}

// Testing the Sliding Window
let anArray = [2, 1, 5, 1, 3, 2];
let maxSumSubArray = slidingWindow(anArray, 3);
console.log('The max sum of subarray is: ', maxSumSubArray);

// ------------------ Sliding Window Size ----------------------------\\

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
