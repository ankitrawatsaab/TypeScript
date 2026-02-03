// 1. Union , | -> pipe in TypeScript

function combine (input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combine1 = combine(5, 10);
const combine2 = combine('Hello', 'World');
const combine3 = combine('Hello', 10);
console.log(combine1, combine2, combine3); 

//2. literal types

function merge(num1: number | string, num2: number | string, mode: "as-number"): number;
function merge(num1: number | string, num2: number | string, mode: "as-string"): string;

function merge( num1: number | string, num2: number | string, mode: "as-number" | "as-string") {
  if (mode === "as-number") {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
      throw new Error("Invalid number input");
    }

    return n1 + n2;
  }

  return num1.toString() + num2.toString();
}

const merged1 = merge(5, 10, "as-number");          // 15
const merged2 = merge("Hello", "World", "as-string"); // "HelloWorld"
const merged3 = merge("Hello", 10, "as-string");   // "Hello10"
const merged4 = merge("5", "10", "as-number");     // 15
// const merged5 = merge("Hello", "World", "as-number"); // ❌ runtime error
console.log(merged1, merged2, merged3, merged4);


// 3. TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combination(num1: Combinable,num2: Combinable,conversionType: ConversionType) { let result;
  if ((typeof num1 === "number" && typeof num2 === "number") ||conversionType === "as-number") {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combination("10", "20", "as-number"); // 30
const sum2 = combination(10, 50, "as-number");     // 60
const combinedName = combination("Patel", " MernStack", "as-string"); // Patel MernStack

console.log(sum1, sum2, combinedName);


// OBJECT TYPE ALIAS

type User = {
    name: string;
    age: number;
    skills: string[]
}

const user: User = {
    name: "Patel",
    age: 22,
    skills:["React", "Node"]
}

function greet(user:User){
   console.log(`Hi, I am ${user.name}`);
}
greet(user);
