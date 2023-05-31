// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changes.

function capitalize(str) {
  
  let first_letter = str.charAt(0).toUpperCase();
  let capitalize_string = first_letter + str.slice(1);
  return capitalize_string;
  
}

const str = prompt("Type the name: ");
const result = capitalize(str);

console.log(result);
