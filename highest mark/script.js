// A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.


let marks = [40, 70, 78, 81, 69, 56, 60];

let max = marks[0];

for (let i = 0; i < marks.length; i++) {
 

  max = marks[i] > max ? marks[i] : max;
   // if (marks[i] > max) {
  //   max = marks[i];
  // }
}
console.log(`Highest mark is: ` + max + `.`);
