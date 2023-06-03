
let i = 6;
let pattern = "";

for (let a = 1; a <= i; a++) {
  for (let b = 0; b < i - a; b++) {
    pattern += "";
  }
  for (let c = 0; c < a; c++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);

console.log("\n");



console.log("\n");


let n = 6;
let pattern2 = "";

for (let a = 0; a <= n; a++) {
  for (let b = 0; b < n; b++) {
    pattern2 += "";
  }
  for (let c = 0; c < n - a; c++) {
    pattern2 += "*";
  }
  pattern2 += "\n";
}
console.log(pattern2);
