
/*
 the function convertToBinary is called on click of the button 
connected to the input fields for IP, and subnet mask
 each text input has fields of input and output ID 
*/

function convertToBinary(inputID, outputID) {


// Capturing out input
let IpInput = document.getElementById(inputID).value;
// Splitting our input at every '.' since it is taking in IP's and subnet masks
let arr = IpInput.split(/\./)
// initializng an empty array for values to be put into
let binaryArr = [];

// This for loop, loops through the array 
for (let i=0; i < arr.length; i++){
// dec conversion parses the string to an integer at whatever value the loop is on
let decConversion = parseInt(arr[i]);
// binaryRetrun is a variable where we actually convert each individual integer to binary
let binaryReturn = decimalToBinary(decConversion);
// This adss each character to the empty binaryArr
binaryArr.push(binaryReturn);
}


let binaryIP = binaryArr.join('.')

console.log("Decimal", IpInput)
console.log("Binary", binaryIP)
console.log(arr)
// This is where the outputID ID from the html is targeted and the binary value is returned
document.getElementById(outputID).textContent = binaryIP;
}

// This function takes in the decConversions converted integer and turns it into binary
function decimalToBinary(decConversion) {
    return decConversion.toString(2);
}

// Here we capture the input from the IP, and subnet mask to pass to our next function
function binaryANDinput(){

const binaryVal1 = document.getElementById("ip").value;
const binaryVal2 = document.getElementById("mask").value;

/* The result variable will get our result by calling the function binaryAND with the 
captured values */
const result = binaryAND(binaryVal1, binaryVal2)
// This posts the value to our HTML page
document.getElementById("result").textContent = result
}


/* This function checks the binary values from the IP and subnet mask against each other
Then returns the appropriate binary character into the result1 string */

function binaryAND (binaryVal1, binaryVal2) {

    const maxLength = Math.max(binaryVal1.length, binaryVal2.length)

    let result1 = '';

    for(let i = 0; i < maxLength; i++) {
     if (binaryVal1[i] === '1' && binaryVal2[i] === '1'){
        result1 +=1;
     } else {
        result1 += '0'
     }
    }
    return result1

   
}