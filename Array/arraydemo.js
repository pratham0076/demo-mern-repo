const num=[2,3,4,5,6]
console.log(num)

//console.log(num[1])

num.push(10)// push()- insert into last element of array
num.push(20)
num.push(30)
console.log(num)
num.unshift(40)// unshift()- insert into 0 index of array
console.log(num)
num.pop()// pop()-deleting last number
console.log(num)
num.shift()
console.log(num)

let numbers=[11,12,13,14,15,16]
let newnum=[4,5,1,2,3]

let nom=newnum.concat(numbers)
console.log(nom)

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits)
