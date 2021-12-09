let number = 2;

let numberToString = number.toString(); // "153"

let counter = 0;

for (let i = 0; i < numberToString.length; i++) {
  console.log(+numberToString.charAt(i));
  counter += Math.pow(+numberToString.charAt(i), numberToString.length);
}

if (number === counter) {
  console.log(`${number} IS Arsmtrong Number`);
} else {
  console.log(`${number} IS NOT Arsmtrong Number`);
}
