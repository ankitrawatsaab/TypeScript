// number, string, boolean
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText).concat(num1 + num2));
    }
    return num1 + num2;
}
var n1 = 20;
var n2 = 200;
var shouldPrint = true;
var message = "Sum of two numbers is = ";
var ans = add(n1, n2, shouldPrint, message);
console.log(ans);
