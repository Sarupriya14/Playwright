/* hoisting is JS default behaviour where variable and functions are moved top of their
scope before the code is executed */


//var is hoisted and if you access it before initialization, JS returns undefined.

console.log(x);
var x = 10;
console.log(x);