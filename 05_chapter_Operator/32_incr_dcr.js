let a = 100;
console.log(a++ + ++a + a++ + ++a);
console.log(a)
// 100 + 102 + 102 + 104 = 408
// 104



a = 37;
console.log(--a + a--);
console.log(a);
// 36 + 36 = 72
// 35

a = 5;
let b = a-- - --a;
console.log(b,a);
// 2,3

let i = 1;
let r = i++ > 1 ? i++:++i;
console.log(r,i);
// r=3, i = 3