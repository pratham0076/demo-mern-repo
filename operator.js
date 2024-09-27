/*arithmetic operators
let num1=30;
let num2=20;
let sum = num1 + num2; //addition
let difference = num1 - num2; //subtraction
let product = num1 * num2; //multiplication
let quotient = num1 / num2; //division
let div=num1%num2;

console.log("Addition: ",sum)
console.log("Subtraction: ",difference)
console.log("Multiplication: ",product)
console.log("Division: ", quotient)
console.log("Modulus: ",div)

//assignment operators

let number=20;
console.log(number) //20
number=10;
console.log(number) //10 updated
number+=10;
console.log(number) //10+10=20
number=-25 //this is not assignment operator
console.log(number) //20 will be replaced by -25
number+=55 //this is assignment operator
console.log(number)
number-=20
console.log(number)
number*=2
console.log(number)
//number=*5 will generate an error
number/=5;
console.log(number)
number%=3;
console.log(number)
*/
//relational operators
/*
let value1=10;
let value2=20;

console.log(value1==value2) //false 
console.log(value1>value2)
console.log(value1>=value2)// checks for both > or ==
console.log(value1<=value2)
console.log(value1!=value2)
*/
/*
let digit1=10;  //value number loose
let digit2='10.01'; //value string tight

console.log(digit1==digit2)// true - value are same
console.log(digit1===digit2)//false - type is different  "==="- this is available in Js only
*/
let binarynum1=0b0010;
let binarynum2=0b1010;
/*
    0010    0010    
    1010    1010
    ----    ----
    0010    1010
*/

//bitwise operator
const outputAND=binarynum1 & binarynum2;
const outputOR=binarynum1 | binarynum2;
console.log(binarynum1 & binarynum2)
console.log(binarynum1 | binarynum2)
console.log(outputAND)
console.log(outputAND.toString(2))
console.log(outputOR)
console.log(outputOR.toString(2))

//logical 
let logNum1=10;
let logNum2=20;
console.log(logNum1<logNum2 && logNum1==20)
console.log(logNum1<logNum2 && logNum2==20)
console.log(logNum1<logNum2 || logNum1==20)
console.log(logNum1<logNum2 || logNum2==20)

