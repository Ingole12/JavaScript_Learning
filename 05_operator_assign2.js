console.log(`---------------------Q1-----------------`);

var ternary=function(num1,num2){
   var result= num1>num2?num1:num2;
   console.log(`Greatest No [${num1},${num2}] --->${result}`);
}
ternary(10,-10);
console.log('---------------------');
ternary(800,899);

console.log(`---------------------Q2-------------------`);

var evod=function(one){
   var tf= one%2==0?true:false;
   console.log(`${one}  no is ----->${tf}`);
}
 
evod(29);
evod(44);
evod(0);
evod(101);

console.log(`---------------------Q3-------------------`);
var even=function(word){
    var len=word.length;
    var res=len%2==0?"EVEN":"ODD";
    console.log(`${word} length is : ${res}`);
}
even("JavaScript");
even("developer");
even("Google");
