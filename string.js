//string literal

let compName ='Testleaf'
let firstName = 'Testleaf'
console.log(compName == firstName); //true
console.log(compName === firstName); //true


let compObj = new String('Testleaf');
let firstObj = new String('Testleaf');

console.log(compObj == firstObj);//false
console.log(compObj ===firstObj); //false
console.log(typeof compObj); //object

console.log(compName == compObj); //true because compName is converted to string and then compared with compobj



//escape sequence
/* \' - single quote
\n - new line
\t - tab
\b - backspace
\r - carriage return
\f - form feed
\\ - backslash
*/
let testcase = 'create a new lead'
let testcaseID = 123

let result = testcase + "-" + testcaseID
console.log(result); //create a new lead-123


//template literal
// `${}`

let result1 = `${testcase} - ${testcaseID}`
console.log(result1); //create a new lead - 123


//string properties and methods

let course = 'playwright'
console.log(`the length of the string is ${course.length}`); //the length of the string is 10


//charAt() - returns the character at a specified index (position) in a string
console.log(`the charAt of 3 of the string is ${course.charAt(3)}`); //the charAt of 3 of the string is y


//indexOf() - returns the index of the first occurrence of a specified text in a string
console.log(`the indexOf of 'y' in the string is ${course.indexOf('y')}`); //the indexOf of 'y' in the string is 3


let company = 'Testleaf'
console.log(`the indexOf of 't' in the string is ${company.indexOf('t', 2)}`); //the indexOf of 't' in the string is 3 - 2nd occurrence








