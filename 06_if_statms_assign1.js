console.log(`--------------step 1--------------`);
var maleMarriageEligibility=function(gender1,age,boyName){
  var res= gender1=="Male" && age>=21
  ?`Hey ${boyName} you are eligible`
  :`Not eligible for Marriage`;
   console.log(res);
}

maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(`--------------step 2--------------`);

function femaleMarriageEligibility(gender,age1,girlName){
        if(gender=="Female" && age1>=18){
            console.log(`Hey ${girlName} you are eligible`)
        }
        else{
            console.log(`Not eligible for Marriage`);
        }
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");