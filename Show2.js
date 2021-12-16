let data = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
];

let show = (arrData) => {
  let result = [];

  arrData.forEach((item) => {
    let tempResult = [];

    for (let prop in item) {
      tempResult.push(`${prop}: ${item[prop]}`);
    }

    result.push(tempResult);
  });

  return result;
};

console.log(show(data));
