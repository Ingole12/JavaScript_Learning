let person={
    Name:"Mohit",
    age:23,
    City:"mumbai",
    address:{
        pin:123345,
        street:"Kanch Pokali"
    }
}
console.log(person.Name,person.age,person.City);
console.log(person);
// let student={...person};

let student=JSON.parse(JSON.stringify(person));

student.City="Pune";
person.age=33;
console.log(student.City,person.City);
console.log(student.age,person.age);

student.address.street="Khav Galli";
console.log(student.address.street,person.address.street);


console.table(person);
console.table(student);