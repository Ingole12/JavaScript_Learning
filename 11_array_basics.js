const array1=[1,2,3];
const array2=[4,5,6];
// const array3=array1concat(array2);
const array3=[...array1,...array2];
console.log(array3);
console.log(`----------------------------------`);


var arrayOfNumber = [1,3,7,8,9,3,7];
console.log(arrayOfNumber);
arrayOfNumber.push(99);
arrayOfNumber.push(88);
arrayOfNumber.pop();
console.log(arrayOfNumber);
var arraylength=arrayOfNumber.length;
console.log(`Total No of element in array:${arraylength}`);

console.log(`Element of 1st index is:${arrayOfNumber[4]}`);

console.log(arrayOfNumber);
let otherArray=[...arrayOfNumber];
arrayOfNumber[3]=44;
console.table(arrayOfNumber);
console.table(otherArray);