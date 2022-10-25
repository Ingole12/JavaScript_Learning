function person(fullName,city,age,gender) {
    this.fullName=fullName;
    this.city=city;
    this.age=age;
    this.gender=gender; 
}
person.prototype.country="India";
let p=new person("Sachin Tendulkar","pune",45,"Male");
let q=new person("Rohit Sharma","Mumbai",32,"Male");
console.log(p.country);
console.log(q.country);