// ============== STRING METHODS ==============

const sampleText = '   DSA in JavaScript Programming Language  ';

// 2.1 Case Conversion
console.log('\n--- Case Conversion ---');
console.log('Original:', `"${sampleText}"`);
console.log('toUpperCase():', sampleText.toUpperCase());
console.log('toLowerCase():', sampleText.toLowerCase());

// 2.2 Trimming Methods
console.log('\n--- Trimming Methods ---');
console.log('trim():', `"${sampleText.trim()}"`);
console.log('trimStart():', `"${sampleText.trimStart()}"`);
console.log('trimEnd():', `"${sampleText.trimEnd()}"`);

// 2.3 Search Methods
console.log('\n--- Search Methods ---');
const searchText = 'The quick brown fox jumps over the lazy dog';

console.log('indexOf("fox"):', searchText.indexOf('fox'));
console.log('lastIndexOf("the"):', searchText.lastIndexOf('the'));
console.log('search(/fox/):', searchText.search(/fox/));
console.log('includes("quick"):', searchText.includes('quick'));
console.log('startsWith("The"):', searchText.startsWith('The'));
console.log('endsWith("dog"):', searchText.endsWith('dog'));

// 2.4 Extraction Methods
console.log('\n--- Extraction and Slicing Methods ---');
const extractText = 'JavaScript Programming';

console.log('slice(0, 4):', extractText.slice(0, 4));
console.log('slice(-7):', extractText.slice(-7));
console.log('substring(4, 10):', extractText.substring(4, 10));
console.log('substr(4, 6):', extractText.substr(4, 6));

// 2.5 Modification Methods (Return new strings)
console.log('\n--- Modification Methods ---');
const modText = 'Hello World Hello';

console.log('replace("Hello", "Hi"):', modText.replace('Hello', 'Hi'));
console.log('replaceAll("Hello", "Hi"):', modText.replaceAll('Hello', 'Hi'));
console.log('concat(" ", "JavaScript"):', modText.concat(' ', 'JavaScript'));

// 2.6 Split and Join
console.log('\n--- Split and Join ---');
const csvData = 'apple,banana,cherry,date';
const sentence = 'Hello world from JavaScript';

console.log('split(","):', csvData.split(','));
console.log('split(" "):', sentence.split(' '));
console.log('split(""):', 'hello'.split(''));
console.log('Array join("-"):', ['a', 'b', 'c'].join('-'));

// 2.8 Repeat Method
console.log('\n--- Repeat Method ---');
console.log('"Ha".repeat(3):', 'Ha'.repeat(3));
console.log('"-".repeat(10):', '-'.repeat(10));
