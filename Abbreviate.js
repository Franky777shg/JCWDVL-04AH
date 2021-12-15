let abbreviate = (text) => {
  // "phantom assassin" => "PHANTOM ASSASSIN" => ["PHANTOM", "ASSASSIN"] => ["P", "A"] => "P.A"

  let result = text
    .toUpperCase()
    .split(" ")
    .map((item) => item.slice(0, 1))
    .join(".");

  return result;
};

console.log(abbreviate("laughing out loud"));
