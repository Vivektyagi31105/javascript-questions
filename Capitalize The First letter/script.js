function capatilize(str) {
  let first_letter = str.charAt(0).toUpperCase();
  let capatilize_string = first_letter + str.slice(1);
  return capatilize_string;
}

const str = prompt("Type the name: ");
const result = capatilize(str);

console.log(result);
