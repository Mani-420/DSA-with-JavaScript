// ============== ADVANCED TWO POINTER PROBLEMS ==============

// Container With Most Water

function maxWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    maxWater = Math.max(area, maxWater);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

// Testing
let heights = [1, 9, 6, 2, 5, 3, 10, 3, 7];
const result = maxWater(heights);
console.log('The Container with the Max Water is: ', result);
