// Rule of thumb:
// == -> Loose comparison
// === -> strict equality

// ---------------2. null and undefined ---------------------
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null > 0); // false
// console.log(null == 0 || null > 0); // false ... but null >= 0 is true

console.log(5 == "5");