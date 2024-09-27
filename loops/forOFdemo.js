let numbers=[10,20,30,40,50];

console.log(typeof(numbers)," : ",numbers)
//console.log(numbers[0]);

for(let i=0;i<numbers.length;i++)//in case of unknown array length- arrayname.length
    {
    console.log("value at index ",i," is = ",numbers[i])
}

//take the values of array and store into variables

console.log("------retrieve value and store into variable using for-of------")
let number=numbers;
for(number of numbers){
    console.log(number)
}

console.log("---------------------")

console.log(number)

console.log("---------------------")

let cities=["nagpur","bhandara","amravti","chandrapur","wardha"];

for(let city of cities){
    console.log(city)
}

