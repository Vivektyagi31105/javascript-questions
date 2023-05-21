let marks = [40, 70, 78, 81, 69, 56, 60];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
  // if (marks[i] > max) {
  //   max = marks[i];
  // }

  max = marks[i] > max ? marks[i] : max;
}
console.log(`Highest mark is: ` + max + `.`);
