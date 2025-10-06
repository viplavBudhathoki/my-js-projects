// Day 4: Arrays Deep Dive → push, pop, shift, unshift, map, filter, reduce, forEach

// Array Dive

// An array is an ordered collection of values (elements). In JavaScript arrays are dynamic and can hold mixed types:

const arr = [1, "hello", true, {name: "Viplav"}];



// Arrays are objects

// In JavaScript:

// Everything that is not a primitive (like number, string, boolean, null, undefined, symbol, bigint) is an object.

// Arrays are special kinds of objects with extra features like .length, [index], and array methods

const array = [1, 2, 3];
console.log(typeof arr); // "object"




// What “objects under the hood” means for mutation

// When we assign an array to another variable, we’re not making a copy of the array, we’re just copying a reference to the same array in memory.

const a = [1,2,3];
const b = a; // b references the same array as a
b.push(4);

console.log(a); // [1,2,3,4]
console.log(b); // [1,2,3,4]

// modifying b also changed a. That’s because they both point to the same array object.



// Basic access & properties

const number = [10, 20, 30];
console.log(number[0]);           // 10
console.log(number.length);       // 3
console.log(number[number.length - 1]); // 30



// Mutating methods (change the original array)

// push(...items)
// Add item(s) to end. Returns new length.

const num = [1,2];
console.log(num.push(3,4)); // returns 4
// num is now [1,2,3,4]

// pop()
// Remove last item and return it.

const x = console.log(num.pop()); // x = 4, num => [1,2,3]

// unshift(...items)
// Add item(s) to start. Returns new length.

console.log(num.unshift(0)); // num => [0,1,2,3]

// shift()
// Remove first item and return it.

const first = console.log(num.shift()); // first = 0

// splice(start, deleteCount, ...items)
// Powerful — can delete, insert, replace.

let numb = [1,2,3,4,5];
// remove 2 elements from index 1:
console.log(numb.splice(1, 2));      // returns [2,3], numb => [1,4,5]

// insert without deleting:
console.log(numb.splice(1, 0, "a","b")); // numb => [1,"a","b",4,5]

// replace:
console.log(numb.splice(2, 1, 99));   // replaces one element at index 2




// Non-mutating methods (return new array/value)

// slice(start, end)
// Extracts a shallow copy from start to end (not including end).

const c = [1,2,3,4];
console.log(c.slice(1,3)); // [2,3]
console.log(c.slice(2));   // [3,4]
console.log(c.slice(-2));  // [3,4]

// concat(...arraysOrValues)
// Join arrays/values and return new array.

console.log([1,2].concat([3,4], 5)); // [1,2,3,4,5]

// Spread operator [...]
// Modern alternative to concat/clone:

const d = console.log([...arr, 5]);    // append 5 without mutating arr
const copy = console.log([...arr]);    // shallow copy



// Iteration & functional methods

// These are functional-style methods returning new arrays or values (except forEach which returns undefined).

// forEach(callback)
// Run side-effect for each element. Does not return a new array.

[1,2,3].forEach((v, i) => console.log(i, v)); // Index: 0 Value: 11 // Index: 1 Value: 12 // Index: 2 Value: 13

["apple", "banana", "cherry"].forEach((v, i) => console.log(i, v)); // 0 apple 1 banana 2 cherry

// Use for: logging, DOM updates, mutating external state.
// Not for: building transformed arrays (use map).


// map(callback)
// Transforms array element-wise — returns new array of same length.
// .map() is used on an array
// It goes through each element
// It applies your function to each element
// And it returns a brand new array with the results

const nums = [1,2,3];
const doubled = console.log(nums.map(x => x * 2)); // [2,4,6]

// array.map(function(currentValue, index, array) {
//    return new value for the new array
// });

const numbers = [10, 20, 30];
const double = numbers.map((num, index) => {
  console.log("Index:", index, "Value:", num);
  return num * 2;
});

console.log("New Array:", double);



// filter(callback)
// Returns new array with elements where callback returns truthy.

console.log([1,2,3,4].filter(x => x % 2 === 0)); // [2,4]


// reduce(callback, initialValue)
// Accumulates array into single value (or object/array).

const sum = [1,2,3].reduce((acc, x) => acc + x, 0); 
console.log(sum) // 6

// Build an object counts:
const ar = ['a','b','a'];
const counts = ar.reduce((acc, v) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {});

console.log(counts)// {a:2, b:1}
// reduce is extremely flexible — learn to use it for grouping, summing, flattening.


// find(callback) & findIndex(callback)
// find returns the first element matching a predicate.
// findIndex returns its index (or -1).

const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
];
// find() → returns the first object that matches
const foundUser = users.find(u => u.id === 2);
// findIndex() → returns the position (index) of the first match
const indexs = users.findIndex(u => u.name === 'C');
console.log("Found user:", foundUser);
console.log("Index of user with name 'C':", indexs);




// includes(value) & indexOf(value)
// includes checks existence (uses ===).
// indexOf returns index or -1.

const include = [1,2,3].includes(2); // true
const index = [1,2,3].indexOf(3); // 2
console.log(include);
console.log(index);


// some(callback) & every(callback)
// some: true if any element passes predicate.
// every: true if all elements pass.

const nu = [1, 2, 3];
// some() → true if **any** element satisfies the condition
const hasGreaterThanTwo = nu.some(x => x > 2);
// every() → true if **all** elements satisfy the condition
const allGreaterThanZero = nu.every(x => x > 0);
// print results
console.log("Is any number greater than 2?", hasGreaterThanTwo);
console.log("Are all numbers greater than 0?", allGreaterThanZero);



// sort(comparator?)
// Sorts in place — mutates array. By default sorts by string Unicode.
let n = [10, 2, 30];

// Default sort (sorts as strings, NOT numbers!)
n.sort();
console.log("Default sort:", n); // Wrong for numbers

// Correct numeric sort using a comparator function
o = [10, 2, 30]; // reset the array
o.sort((a, b) => a - b);
console.log("Numeric sort:", o);



// reverse()
// Reverses array in place — mutates.
let z = [1, 2, 3];
// Reverse the array
z.reverse();
// Print the reversed array
console.log("Reversed array:", z);


// Shallow Copy
// A shallow copy copies the top-level structure of an array or object,
// but if the array contains objects, the references to those objects are still shared.

const e = [{ x: 1 }];
const cop = [...e];  // shallow copy using spread

console.log("cop:", cop);                // [{ x: 1 }]
console.log("cop[0] === e[0]:", cop[0] === e[0]); // true

// copy is a new array.
// But cop[0] and e[0] point to the same object.
// If you modify the object through one array, it affects the other:
cop[0].x = 99;
console.log("e[0].x after modification:", e[0].x); // 99



// Deep Copy

// A deep copy creates a completely independent copy — including nested objects.
// Changes in the new array won’t affect the original.

const m = [{ x: 1 }];
const deepCopy = JSON.parse(JSON.stringify(m));

deepCopy[0].x = 99;
console.log(m[0].x); // 1 (original not changed)
console.log(deepCopy[0].x); // 99

// JSON.stringify() converts the array into a string.
// JSON.parse() converts it back into a new object.
// Now deepCopy[0] is completely separate from a[0].

// To deep clone simple nested objects, JSON.parse(JSON.stringify(obj)) works but has limitations (loses functions, Dates, undefined). 
// For real deep clones use structuredClone (modern) or libraries.



// Immutability patterns (recommended)
// Prefer creating new arrays rather than mutating originals — easier to reason about.
const arraay = [1,2,3];
const newArr = arraay.concat(4); // or [...arr, 4]
console.log(newArr);
// Useful with React, Redux, functional programming.



// Performance notes (Big-O)
// Access arr[i]: O(1)
// push, pop: O(1) amortized
// shift, unshift, splice (in middle): O(n)
// map, filter, forEach, reduce: O(n)
// sort: O(n log n)
// When dealing with very large arrays (100k+), prefer O(1) or O(n) operations and avoid repeated shift/unshift.


// Common pitfalls & tricks
// sort() without comparator leads to string-sorting mistakes.
// Mutating when you meant to copy — remember slice() or spread.
// Floating point in numbers: 0.1 + 0.2 !== 0.3 — use rounding if needed.
// Using forEach to return a new array: won't work because forEach returns undefined — use map.
// reduce initialValue omitted: first element becomes initial — can cause bugs for empty arrays.
// Chaining: many array methods return arrays so you can chain:
// arr.filter(...).map(...).reduce(...).
// Sparse arrays: [,,] have holes; methods like map skip holes.

// Exercise 1: Write a function removeDuplicates(arr) that returns new array without duplicates, preserving order.

let s = [11, 22, 33, 33, 44, 44, 55];

let newS = s.filter((item, index) => s.indexOf(item) === index);

console.log(newS); // Output: [11, 22, 33, 44, 55]


// Exercise 2: Given const data = [1,2,3,4,5], produce [1,4,9,16,25] using array methods.

const daataa = [1, 2, 3, 4, 5];

const squaree = daataa.map(num => num * num);

console.log(squaree); // Output:  [1, 4, 9, 16, 25]

// Exercise 3: From an array of user objects, return names of users aged >= 18 sorted alphabetically.

const userss = [
  {name: "Viplav Budhathoki", age: 22},
  {name: "Sankalpa Limbu", age: 20},
  {name: "Sangram Budhathoki", age: 17}
]

// Step 1: Filter users aged 18 or above
// Step 2: Map to get only their names
// Step 3: Sort names alphabetically

const adultNames = userss
.filter(userss => userss.age >= 18)
.map(userss => userss.name)
.sort()

console.log(adultNames); // Output: ['Sankalpa Limbu', 'Viplav Budhathoki']


// Exercise 4: Flatten [[1],[2,3],[4,[5]]] to one-level array using reduce (result: [1,2,3,4,[5]]).

const arrr = [[1], [2, 3], [4, [5]]];

const flattened = arrr.reduce((acc, val) => acc.concat(val), []);

console.log(flattened);
// Output: [1, 2, 3, 4, [5]]


// Exercise 5: Implement groupBy(arr, fn) that groups elements by fn(item) using reduce.

function groupBy(arr, fn) {
    return arr.reduce((acc, item) => {
        const key = fn(item);       // Compute the group key
        if (!acc[key]) acc[key] = []; // If key doesn't exist, create an array
        acc[key].push(item);        // Add item to the corresponding group
        return acc;                 // Return accumulator for next iteration
    }, {});                        // Start with empty object
}

// Example: group numbers by even/odd
const numberss = [1, 2, 3, 4, 5];
const grouped = groupBy(numberss, x => x % 2 === 0 ? 'even' : 'odd');

console.log(grouped);
// Output: { odd: [1, 3, 5], even: [2, 4] }




