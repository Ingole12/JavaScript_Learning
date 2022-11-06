class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","It",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_Rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_Sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_Monika=new Employee(77,"Monika","It",40000,"Wipro");
const emp_Vinayak=new Employee(88,"Vinayak","It",75000,"TCS");
const emp_Mahesh=new Employee(99,"Mahesh","HR",85000,"Infy");


let array_employee=[emp_anil,emp_radha,emp_Rishi,emp_Sonali,emp_Monika,emp_Vinayak,emp_Mahesh];

console.log(`---------Q1--list of all employee names----------`);
const namearray=[];
array_employee.forEach((element)=>{   
       namearray.push(element.emp_name)
});
console.log(namearray);

console.log(`---------Q2-list of dept -----------`);
// const namearray1=[];
const newset=new Set();
array_employee.forEach((element)=>{  
       newset.add(element.emp_dept) 
    //    namearray1.push(element.emp_dept)
});
// console.log(namearray1);
console.log(newset);

console.log(`---------Q3-list of Employee ID -----------`);
const namearray2=[];
array_employee.forEach((element)=>{   
       namearray2.push(element.emp_id)
});
console.log(namearray2);

