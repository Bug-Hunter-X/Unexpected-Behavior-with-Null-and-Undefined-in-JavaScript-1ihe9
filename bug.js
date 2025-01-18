function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause error if the function is called with null and undefined
  }
  return a + b;
}

console.log(foo(1, null)); // null
console.log(foo(1, undefined)); //Uncaught TypeError: Cannot add '1' and 'undefined'