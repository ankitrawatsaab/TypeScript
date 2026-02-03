// Union , | -> pipe in TypeScript
// function combine (input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }
// 🔹 FUNCTION IMPLEMENTATION
function merge(num1, num2, mode) {
    if (mode === "as-number") {
        var n1 = Number(num1);
        var n2 = Number(num2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid number input");
        }
        return n1 + n2;
    }
    return num1.toString() + num2.toString();
}
// 🔹 FUNCTION CALLS
var merged1 = merge(5, 10, "as-number"); // 15
var merged2 = merge("Hello", "World", "as-string"); // "HelloWorld"
var merged3 = merge("Hello", 10, "as-string"); // "Hello10"
var merged4 = merge("5", "10", "as-number"); // 15
// const merged5 = merge("Hello", "World", "as-number"); // ❌ runtime error
console.log(merged1, merged2, merged3, merged4);
