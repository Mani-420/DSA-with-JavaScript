function countCharFrequency(str) {
  let freqMap = new Map();

  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  return freqMap;
}

let text = 'programming';
let charFreq = countCharFrequency(text);
console.log(charFreq);

// Count array element frequencies
function countArrayFrequency(arr) {
  let freqMap = new Map();

  for (let element of arr) {
    freqMap.set(element, (freqMap.get(element) || 0) + 1);
  }

  return freqMap;
}

let numbers = [1, 2, 3, 2, 1, 4, 5, 1];
let numFreq = countArrayFrequency(numbers);
console.log(numFreq);

// Find most frequent element
function findMostFrequent(arr) {
  let freqMap = countArrayFrequency(arr);
  let maxCount = 0;
  let mostFrequent = null;

  for (let [element, count] of freqMap) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = element;
    }
  }

  return { element: mostFrequent, count: maxCount };
}

console.log(findMostFrequent(numbers));
