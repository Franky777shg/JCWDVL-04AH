let generateQueryEdit = (body) => {
  let result = "";
  for (let key in body) {
    if (key === "price") {
      result += `${key} = ${body[key]},`;
    } else {
      result += `${key} = '${body[key]}',`;
    }
  }
  return result.substring(0, result.length - 1);
};

let obj = {
  name: "lala",
  price: 5000,
};

console.log(generateQueryEdit(obj));
