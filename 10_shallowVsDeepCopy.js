let myname="Rahul";
let abc=myname;

let frdName=myname;
frdName="Anil";
myname="Sachin";
console.log(frdName,myname);

let person={
    Name:"Mohit",
    age:23,
    City:"mumbai"
}
let student=person;
student.City="pune";
console.log(student.City);
console.log(person.City);