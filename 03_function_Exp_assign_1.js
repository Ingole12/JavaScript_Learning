console.log("--------------Q1----------------");

var square = function (num) {
    console.log(num * num);
}

square(5);
square(6);
square(25);
square(100);

console.log("--------------Q2----------------");

var add = function (val, val1) {
    console.log(val + val1);
    console.log("Type of function is:");
}
add(1, 3);
console.log(typeof (add));

console.log("--------------Q3----------------");
var areaT = function (base, height) {
    console.log((base * height) / 2);
}
areaT(45, 34);


console.log("--------------Q4----------------");

var areaR = function (length, width) {
    console.log(length * width);
}
areaR(499, 917);

console.log("--------------Q5----------------");

var swap = function (sno1, sno2) {
    console.log("Before Swap:", sno1, sno2);
    var temp = sno1;
    sno1 = sno2;
    sno2 = temp;
    console.log("After Swap:", sno1, sno2);
}


swap("Virat", "Anushka");
swap(1000, 2000);

console.log("---------------Q6---------------");
var str = function () {
    var a = "JavaScript the most popular language";
    console.log(a);
    console.log("length of given string is:",a.length);
    console.log("Index of S :",a.indexOf('S'));
    console.log("Index of lang :",a.indexOf('lang'));
    console.log("Character At last in string:",a.charAt(a.length - 1));
    console.log("Character At last 3 rd :",a.charAt(a.length - 3));
}
str();




