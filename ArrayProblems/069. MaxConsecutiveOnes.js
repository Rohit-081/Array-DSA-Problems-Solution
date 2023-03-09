function maxConsecutiveOnes(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n << 1);
    count++;
  }
  return count;
}
console.log(maxConsecutiveOnes(3));
console.log(maxConsecutiveOnes(222));
