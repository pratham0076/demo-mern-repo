const states=new Array();
console.log(states)
/*const cities=["Nagpur", "Yavatmal", "Wardha", "Amravti"]
console.log(typeof(cities), " ",cities);
console.log(typeof(cities), " ",cities[2]);
console.log(typeof(cities), " ",cities[3]);
console.log('---------------')*/
const employee = {
    FirstName : "Soukhyad",
    LastName : "pohane",
    Age : 20,
    address : {
        street : "GB road",
        city : "Wardha",
        pincode :  442001

    }
}

delete employee.Age;
delete employee.address.street;
console.log(employee)
/*
console.log(typeof(employee));

console.log(employee.FirstName," ",employee.LastName," ",employee.Age)
console.log(employee.address.street," ",employee.address.city," ",employee.address.pincode)
console.log('---------------')

const todayDate=new Date();
console.log(typeof(todayDate))
console.log("today's date ",todayDate)*/