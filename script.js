function convertToBinary(inputID, outputID) {

let IpInput = document.getElementById(inputID).value;
let arr = IpInput.split(/\./)
let binaryArr = [];


for (let i=0; i < arr.length; i++){

let decConversion = parseInt(arr[i]);
let binaryReturn = decimalToBinary(decConversion);
binaryArr.push(binaryReturn);
}


let binaryIP = binaryArr.join('.')

console.log("Decimal", IpInput)
console.log("Binary", binaryIP)
console.log(arr)

document.getElementById(outputID).textContent = binaryIP;
}

function decimalToBinary(decConversion) {
    return decConversion.toString(2);
}