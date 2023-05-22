function capitalize(str) {
  let first_letter = str.charAt(0).toUpperCase();
  let capitalize_string = first_letter + str.slice(1);
  return capitalize_string;
}

const str = prompt("Type the name: ");
const result = capitalize(str);

console.log(result);
