const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

const person2 = {
    firstName: "Anne",
    lastName: "Smith",
    age: 45,
    eyeColor: "green"
};

let info=Object.assign(person1,person2)

console.log(person1)
console.log(person2)

console.log(info)

console.log("Object keys: ",Object.keys(person1))

person1.firstName="Sam";
person1.lastName='Manekshaw';
console.log(person1)
console.log(person2)
Object.freeze(person2)
person2.firstName="Sam";
person2.lastName='Manekshaw';
console.log(person2)
