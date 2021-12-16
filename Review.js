// let returnArray = () => {
//   return [
//     {
//       name: "apel",
//       price: "standar",
//     },
//     {
//       name: "apel",
//       price: "standar",
//     },
//     {
//       name: "apel",
//       price: "standar",
//     },
//   ];
// };

// console.log(returnArray());

// let obj = {};

// obj.name = "apel"; // pemanggilan property di dalam obejct cara 1

// obj["name"]; // pemanggilan property di dalam obejct cara 2

// console.log(obj);

let obj = {
  name: "banana",
  sugar: "low",
  isExpensive: false,
};

for (let prop in obj) {
  console.log(prop, obj[prop]);
}
