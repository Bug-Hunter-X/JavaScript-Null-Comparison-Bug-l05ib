function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo(0,2)); //2
console.log(foo(2,0)); //2