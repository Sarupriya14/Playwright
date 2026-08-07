const browserVersion = "chrome"; //global scope
function getBrowserVersion()
{

    if(browserVersion == "chrome")
    {
       // var browserVersion ="safari"; // undefined
     let browserVersion = "edge" ; 
     console.log("printing local variable inside block", browserVersion); //print local variable 

    }
    console.log("printing global inside function outside block", browserVersion); // print const
   


}
getBrowserVersion() //first hoist var declaration
console.log("printing global variable", browserVersion) //print const value as it is global