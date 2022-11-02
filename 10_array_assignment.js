const arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];

console.log(`Given array:  ${arrayOfNames}`);
let newArray=[...new Set(arrayOfNames)];
console.log(`After Removing duplicate element :${newArray}`);

console.log(`-----------------count of duplicate names---------------`);
let c=arrayOfNames.length;
let k=newArray.length;
console.log(c-k);
console.log(`----------Total no of unique element-------------`);
console.log(k);