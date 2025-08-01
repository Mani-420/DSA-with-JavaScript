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

// Testing
let anArray = [2, 1, 5, 1, 3, 2];
let maxSumSubArray = slidingWindow(anArray, 3);
console.log('The max sum of subarray is: ', maxSumSubArray);
