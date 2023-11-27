function convertToBinary(){

let IpInput = document.getElementById("ip").value;

let decConversion = parseInt(IpInput)

let binaryReturn = decimalToBinary(decConversion);

console.log("Decimal", IpInput)
console.log("Binary", binaryReturn)

document.getElementById('returnedBinary').textContent = binaryReturn;
}

function decimalToBinary(decConversion) {
    return decConversion.toString(2);
}
