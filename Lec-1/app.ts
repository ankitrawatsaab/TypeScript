// number, string, boolean

function add( num1: number, num2: number, printResult: boolean, someText: string){
  if (printResult) {
    console.log(`${someText}${num1 + num2}`);
  }

  return num1 + num2;
}

const n1 = 20;
const n2 = 200;

const shouldPrint = true;
const message = "Sum of two numbers is = ";

const ans = add(n1, n2, shouldPrint, message);
console.log(ans);
