let y = 60
var a = 10
function test(){
    console.log('accessing global variable inside the function', y); //60
    console.log('accessing global variable inside the function', a); //10
}
test()
console.log('accessing global variable inside the function', a); //10


//function scope - var is function scope
//block scope - let and const is block scope

function demo(){
    var x = 20
    console.log('accessing var inside function', x); //20

    if(true){
        var b = 90
        var a = 40
        let z = 50
        let z = 70
        console.log('accessing var outside the block', x); //20
        console.log('accessing let inside the block ', z); //50
        console.log('accessing var inside the block ', b); //90
        console.log('var reassigned value printing inside the block ', a);//40 var redeclared value
        console.log(' let redeclared ', z);//reference error because z is already declared


    }

    //console.log('accessing let inside the function ', z); // reference error - z is not defined
    //calling let outside block gives reference error
}
demo()
//calling var outside function
//console.log('accessing var outside function', x); //reference error - x is not defined. 