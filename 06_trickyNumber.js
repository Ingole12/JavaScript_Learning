console.log('------------------Q1------------------');
var string="I am very good IT Developer";
var lo=string.toLowerCase();
var vowels="aeiou";
count=0;
for (let index = 0; index < lo.length; index++) {
    var a=lo.charAt(index);
    var b=vowels.includes(a);
    if (vowels.includes(a)) {
        count=count+1;
    }
    
}
console.log(string);
console.log(`Total vowels using includes():${count}`);

console.log('------------------Q2------------------');
function cubesum() {
    var cub=0;
    for (let c = 1; c <=5; c++) {
      cub=cub+(c*c*c);
    }
    console.log(`sum of cube 1-5 :${cub}`);
}
cubesum();

console.log('------------------Q3------------------');

function oddPositionedChars(str) {
    console.log(`${str}`);
    var result='';
    for (let st3 = 0; st3 < str.length; st3++) {
        var ch=str.charAt(st3);
        if (st3%2!=0&&ch!=" ") {
            result=result+ch;
        }
        }   
        console.log(`odd position character:  ${result}`); 
}
oddPositionedChars("Hard Work always pays back");
console.log(`---------------------------------`);
oddPositionedChars("Soon I will be Angular IT Champ");