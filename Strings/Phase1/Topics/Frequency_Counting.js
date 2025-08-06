// Character frequency counter

function getCharFrequency(str) {
  let frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

// Example usage
let text = 'programming';
let freq = getCharFrequency(text);
console.log(freq);

// Find most frequent character
function findMostFrequentChar(str) {
  let frequency = getCharFrequency(str);
  let maxChar = '';
  let maxCount = 0;

  for (let char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return { char: maxChar, count: maxCount };
}

console.log(findMostFrequentChar('programming'));
