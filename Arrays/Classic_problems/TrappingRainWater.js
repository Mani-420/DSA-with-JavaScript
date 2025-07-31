// ============== ADVANCED TWO POINTER PROBLEMS ==============

// Trapping Rain Water

function TrappingRainWater(heights) {
  if (heights.length < 3) return;

  let left = 0;
  let right = heights.length - 1;
  let leftMost = 0;
  let rightMost = 0;
  let totalWater = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMost) {
        leftMost = heights[left];
      } else {
        totalWater += leftMost - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMost) {
        rightMost = heights[right];
      } else {
        totalWater += rightMost - heights[right];
      }
      right--;
    }
  }
  return totalWater;
}

// Testing
let heights = [5, 0, 0, 0, 5];
let result = TrappingRainWater(heights);
console.log('The Total Water: ', result);
