// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// keys.push("more");

// Array.from()
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

// for...of
let map1 = new Map();
map.set("name", "John");
let keys1 = [];
for (let key of map.keys()) {
  keys.push(key);
}
keys.push("more");
console.log(keys);
