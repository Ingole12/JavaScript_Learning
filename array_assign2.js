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
console.log(`---------------Q1------------`);
for (const element of array_employee) {
    if (element.emp_company=="TCS") {
   console.log(`Employee Name:${element.emp_name} Company Name:${element.emp_company}`);
    }
}
console.log(`---------------Q2------------`);
for (const element1 of array_employee) {
    if (element1.emp_dept=="Finance") {
   console.log(`Employee Department:${element1.emp_dept} Employee Name:${element1.emp_name}`);
    }
}

console.log(`---------------Q3------------`);
for (const element2 of array_employee) {
    if (element2.emp_name.startsWith("R")) {
        // console.log(element2);
   console.log(`Employee Id:${element2.emp_id} Name:${element2.emp_name} Department:${element2.emp_dept} Salary:${element2.emp_salary} Company:${element2.emp_salary}`);
    }
}

console.log(`---------------Q4------------`);
for (const element3 of array_employee) {
    if (element3.emp_salary>70000) {
   console.log(`Employee Name:${element3.emp_name} Company Name:${element3.emp_company} Salary:${element3.emp_salary}`);
    }
}

console.log(`---------------Q5------------`);
for (const element4 of array_employee) {
    if (element4.emp_salary>=50000 && element4.emp_dept=="It") {
        // console.log(element4);
        console.log(`Employee Id:${element4.emp_id} Name:${element4.emp_name} Department:${element4.emp_dept} Salary:${element4.emp_salary} Company:${element4.emp_salary}`);
    }
}

console.log(`---------------Q6------------`);
for (const element1 of array_employee) {
    if (element1.emp_company=="Infy") {
   console.log(element1);
    }
}