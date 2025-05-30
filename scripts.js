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
names.forEach( (names, index) => {
  const province = provinces[index]
  console.log(`* ${names} (${province})`)
});

// 2. Uppercase Transformation
const upperCaseNames = provinces.map(province => province.toUpperCase());
console.log(upperCaseNames);

// 3. Create a new array using map that contains the length
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

