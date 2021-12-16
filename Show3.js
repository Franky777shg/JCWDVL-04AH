let data = [
  {
    name: "apple",
    sugar: "medium",
    isExpensive: true,
  },
  {
    name: "banana",
    sugar: "low",
    isExpensive: false,
  },
];

let show = (arrData) => {
  let result = arrData.map((item) => {
    let tempResult = {};

    for (let prop in item) {
      tempResult[item[prop]] = prop;
      // tempResult["apple"] = name
      // tempResult.apple = name
    }

    return tempResult;
  });

  return result;
};

console.log(show(data));
