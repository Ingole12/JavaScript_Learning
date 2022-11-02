let arrayOfNumber=[2,3,4,5];
arrayOfNumber.push(3);
console.log(arrayOfNumber);



let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("====== Adding duplicate element=======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size);

console.log(`====== Deleting element 9 ========`);
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log(`====== Check whether element 7 available into set or not ========`);
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

//setOfNumbers.clear(); // It will clear the ser or empty the set
console.log(`====== Traversing set ========`);
for (const element of setOfNumbers) {
    console.log(element);
}

console.log(`====== remove duplicate element in array ========`);
let arrayNumber=[2,3,4,5,6,3,5];
console.log(`Before Removing duplicate element :${arrayNumber}`);
let arrayUniqueElement = [...new Set(arrayNumber)];
console.log(`After Removing duplicate element :${arrayUniqueElement}`);
