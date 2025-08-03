// 3.1 Iterate with Loops

const testing = 'Hello World!';

function iterateWithFor(testing) {
  for (let i = 0; i < testing.length; i++) {
    console.log(testing[i]);
  }
}

// Testing
iterateWithFor(testing);

// Method 2: for...of loop (ES6)
function iterateWithForOf(str) {
  let index = 0;
  for (const char of str) {
    console.log(`Index ${index}: ${char}`);
    index++;
  }
}
iterateWithForOf(testing);
