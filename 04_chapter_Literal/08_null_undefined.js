// Topic: Null vs undefined in Javascript

// undefined: a variable exits, but it has not been assigned with any value yet
// null: a variable exists, but developer has explicity assigns "no value" or "empty"


let userName;
console.log(userName)
console.log(typeof userName)


// reassigning
let x;
x = 10;
console.log(x);

// no return function return undefined

function greet(){
    // no return 
}
console.log(greet())


let test = null;
console.log(test);
console.log(typeof test); //"object" --> known JS quirk !!

