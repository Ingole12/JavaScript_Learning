
class Person{
    constructor(fullName,city,age,gender){
      this.fullName=fullName;
      this.city=city;
      this.age=age;
      this.gender=gender; 
    }
    details(){
        console.log(`${this.fullName}${this.city}${this.age}${this.gender});
    }
}
p.details();
let p=new Person("Sachin Tendulkar","pune",45,"Male");
let q=new Person("Rohit Sharma","Mumbai",32,"Male");
console.log(p);
console.log(q);
console.log(q instanceof Person);