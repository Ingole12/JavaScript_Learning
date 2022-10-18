var givenString="I Love JavaScript";
for (let index = 0; index < givenString.length; index++) {
    if (index%2==0) {
        var charAt=givenString.charAt(index);
        console.log(charAt);
        
    }
    
}

var givenString="I Love JavaScript";
console.log(`------------------Just log vowels-------------------------`);
for (let index = 0; index < givenString.length; index++) {
   var char= givenString.charAt(index);
     if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||
     char=="A"||char=="E"||char=="I"||char=="O"||char=="U") {
        console.log(char);    
     }
    //  else{
    //     console.log(char);
    //  }
}


// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}


