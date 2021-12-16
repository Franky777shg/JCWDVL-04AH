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
  let result = "";

  arrData.forEach((item) => {
    let tempResult = ""; // "title: Bill Gates, author: The Road Ahead, readingStatus: true\n"

    for (let prop in item) {
      tempResult += `${prop}: ${item[prop]}, `; // readingStatus: true
    }

    tempResult = tempResult.slice(0, tempResult.length - 2);

    tempResult += "\n";

    result += tempResult;
  });

  return result;
};

console.log(show(data));
