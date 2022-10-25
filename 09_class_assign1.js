
console.log(`---------------Q1---------------------`);
class vehicle{
    constructor(Name,Type,color,compony){
        this.Name=Name;
        this.Type=Type;
        this.color=color;
        this.compony=compony;
    }
}
let a=new vehicle("Carnival","MUV","White","Kia");
let b=new vehicle("Venue","SUV","black","Hyundai");
let c=new vehicle("Fortuner","SUV","black","Toyota");
let d=new vehicle("XUV700","SUV","White","Mahindra");
let e=new vehicle("Brezza","SUV","black","Maruti Suzuki");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(`---------------Q2---------------------`);
class College{
    constructor(collegeName,no_Of_Faculty,totalStudent){
    this.collegeName=collegeName;
    this.no_Of_Faculty=no_Of_Faculty;
    this.totalStudent=totalStudent;
    }

}
let coll1=new College("Sangola College",5,16000);
let coll2=new College("Vidnyan Mahavidyalaya",5,10000);
let coll3=new College("Shivaji Polytechinc",4,8000);
let coll4=new College("Fabtech",7,18000);
console.log(coll1);
console.log(coll2);
console.log(coll3);
console.log(coll4);

console.log(`---------------Q3---------------------`);

function traverse_object(College){
       for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}  :${element}`);
        }
       }
}

traverse_object(coll1);
console.log(`------------------`);
traverse_object(coll2);
console.log(`------------------`);
traverse_object(coll3);
console.log(`------------------`);
traverse_object(coll4);
