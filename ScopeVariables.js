let num=10; //global variable
let numm;
const constnum=25; //Global Constant Variable
{
     let num=20; //local variable
     const constnum=35; //local Constant Variable
    console.log("Inside Block", num)
    console.log("Inside Block", constnum)
}
console.log("Kay re: ",numm) //undefined
console.log("Outside ",num) //10
console.log("OUtside Block", constnum) //25