let word = "xXdxaxxkxxuxaxXyx";

let counter = 0;

for (let i = 0; i < word.length; i++) {
  console.log(word.charAt(i));
  if (word.charAt(i) === "x" || word.charAt(i) === "X") {
    counter += 1;
  }
}

if (counter <= 10) {
  console.log("Safe!");
} else {
  console.log("Danger!");
}
