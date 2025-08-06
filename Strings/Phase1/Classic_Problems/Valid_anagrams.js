function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let char in freq1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char in freq2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}

// Testing
let result = anagrams('listen', 'silent');
if (result == true) {
  console.log('The strings are valid anagrams');
} else {
  console.log('The strings are not valid anagrams');
}
