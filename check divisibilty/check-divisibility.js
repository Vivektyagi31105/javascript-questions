// 9. Check for divisibility.
// Write a program that takes an array of numbers and prints all the numbers
//  that are divisible by 3, but not by 2.
// Usd a for loop and continue statement.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  
  if (arr[i] % 2 == 0) {
    continue;
  }
  
  if (arr[i] % 3 == 0) {
    console.log(arr[i]);
  }
  
}
