import { provinces, names, products } from "./data.js"

// FIRST EXERCISE
// Manipulate data using the JavaScript's powerful array methods 
// like forEach, map, filter, reduce, and more, to perform a variety of tasks.

// 1. ForEach Basics
console.log(`NAMES:`); 
names.forEach(name => console.log(`- ` + name)); // log each name to the console

console.log(`PROVINCE:`)
provinces.forEach(province => console.log(`- ` + province)); // log each province

//log each name with a matching province.
names.forEach((names, index) => {
  const province = provinces[index]
  console.log(`* ${names} (${province})`)
});

// 2. Uppercase Transformation
const upperCaseNames = provinces.map(province => province.toUpperCase());
console.log(upperCaseNames);

// 3. Create a new array using map that contains the length
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Alphabetically sort the provinces
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 5. Filter to remove provinces containing "Cape". Log the count of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(`Remaining provinces count: ${filteredProvinces.length}`);

// 6. Create a boolean array using map and some to determine if a name contains the letter 'S'.
const namesWithS = names.map(name => name.includes("S"));
console.log(namesWithS);
const containsS = names.some(name => name.includes("S"));
console.log(`Does any name contain 'S'? ${containsS}`);

// 7. Using reduce to transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc
}, {});

console.log(nameProvinceMap);

