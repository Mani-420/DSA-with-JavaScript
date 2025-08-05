//----------------------- Counting a String-----------------------
// Method 1: Count all Characters-------------------------------

function countAllCharacters(str1) {
  let count = 0;

  for (let i = 0; i <= str1.length - 1; i++) {
    count++;
  }
  return count;
}

// Testing Method 1:
const result1 = countAllCharacters('Hello World');
console.log('The total character are: ', result1);

// Method 2: Count Alphabets-------------------------------

function countAlphabetic(str2) {
  count2 = 0;
  for (let i = 0; i <= str2.length - 1; i++) {
    if (/[a-zA-Z]/.test(str2[i])) {
      count2++;
    } else {
      continue;
    }
  }
  return count2;
}

// Testing Method 2:
const result2 = countAlphabetic('Hello World@3');
console.log('The total alphabetic characters are: ', result2);
