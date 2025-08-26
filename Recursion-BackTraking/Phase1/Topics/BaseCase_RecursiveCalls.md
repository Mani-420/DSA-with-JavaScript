# Recursion and Backtracking in JS

## Base Case for Recursive Calls

- Recursion is when a function calls itself to solve a smaller version of the problem.

- Base Case: The condition under which the recursion stops.
- Recursive Call: The function calls itself with a simpler or smaller input.

### Example Structure

function recursiveFunction(input) {
if (base case condition) {
// Stop recursion
return result;
}
// Recursive call with smaller/simpler input
return recursiveFunction(smallerInput);
}
