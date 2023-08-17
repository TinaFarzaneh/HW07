// function aclean(arr) {
//   let result = [];
//   let unique = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");

//     if (unique.add(sorted)) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));
//OR OR OR OR OR OR
function aclean(array) {
  let result = new Set();

  return array.filter((e) => {
    let sorted = e.toLowerCase().split("").sort().join("");

    if (!result.has(sorted)) {
      result.add(sorted);
      return result;
    }
  });
}

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(array));
