function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // or handle the case appropriately
  }
  return a + b;
}

console.log(foo(1, null)); // 1
console.log(foo(1, undefined)); // 1