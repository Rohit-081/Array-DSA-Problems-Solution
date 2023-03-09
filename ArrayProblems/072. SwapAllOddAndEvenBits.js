// Input: 23
// Output: 43
// Explanation: 23 (00010111) should be converted to 43 (00101011).

// Input: 2
// Output: 1
function swapBits(n) {
  // Initialize variable even_bits with bitwise and of N with 0xAAAAAAAA(32 bit number with all even bits set as 1 and all odd bits as 0). 
  // Initialize variable odd_bits with bitwise and of N with 0x55555555. The number 0x55555555 is a 32 bit number with all odd bits set as 1 and all even bits as 0. 
  let ev = n & 0xaaaaaaaa;
  let od = n & 0x55555555;
  ev >>= 1;
  od <<= 1;
  return ev | od;
}

console.log(swapBits(23));
console.log(swapBits(43));