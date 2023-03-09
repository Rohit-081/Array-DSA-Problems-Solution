function isPowerofTwo(n) {
  if (n === 0) {
    return "NO";
  }
  if ((n & (n - 1)) === 0) {
    return "YES";
  }
  return "NO";
}

console.log(isPowerofTwo(1));
console.log(isPowerofTwo(16));
console.log(isPowerofTwo(98));
console.log(isPowerofTwo(23));
console.log(isPowerofTwo(128));