const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(str) {
  
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    
    if (vowels.includes(str[i])) {
      count++;
    }
    
  }
  
  return count;
}

const str = prompt("Type the name: ");
const result = countVowels(str);

console.log(`Total number of vowels in string is: ` + result);
