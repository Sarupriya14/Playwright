

function duplicate(){
let arr = [1,2,3,2,4,5,1,4,9,7]; //declare an array with duplicate values


//Pseudo code:


for(let i=0;i<arr.length;i++) //iterate through the array //arr.length=10; i=0; i<10; i++
    {
for(let j=i+1;j<arr.length;j++) //i=0; j=0+1 
    {
        if(arr[i]==arr[j]) //compare the values of i and j
            { 
              console.log(arr[i]) //print the duplicate value
            }
    }
    }

}
duplicate();