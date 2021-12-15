let sortLastChar = (text) => {
  // "laughing out loud" => ["laughing", "out", "loud"] => ["loud", "laughing", "out"]
  let result = text
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

  return result;
};

console.log(sortLastChar("laughing out loud"));
