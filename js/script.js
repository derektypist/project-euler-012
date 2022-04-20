// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById('mynumber').value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>1000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 1000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The first triangle number to have over ${num} divisors is ${divisibleTriangleNumber(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;

}

/*
    Function to return the value of the first triangle number
    to have over n divisors
    divisibleTriangleNumber(5) returns 28
    divisibleTriangleNumber(23) returns 630
*/
function divisibleTriangleNumber(n) {
    let i = 1;
    let triangleNum = 1;
    while (numDivisors(triangleNum) < n) {
        i += 1;
        triangleNum += i;
    }
    return triangleNum;
}

/*
    Function to return the number of divisors
    numDivisors(6) returns 4
*/
function numDivisors(n) {
    let count = 0;
    for (let i=1;i<Math.sqrt(n);i++) {
        if (n%i===0) count += 2;
    }
    // Check if the number n is a perfect square
    if (n % Math.sqrt(n) === 0) count += 1;
    return count;
}