
var lowerInput = prompt("Please enter L:");
var upperInput = prompt("Please enter U:");

var currentNumber = lowerInput;

var allIntegersBetweenLowerAndUpper = "";
while(currentNumber < upperInput){
    allIntegersBetweenLowerAndUpper += currentNumber + " ";
    currentNumber++;
}
console.log(allIntegersBetweenLowerAndUpper);