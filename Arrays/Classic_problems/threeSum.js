// Three Sum Problem using 3 pointers approach

function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let result = [];

  for (i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

// Testing
let anArray = [-1, 0, 1, 2, -1, -4];
let answerArray = threeSum(anArray);
console.log('The numbers whose answer is equal to your targer: ', answerArray);
