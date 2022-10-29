const bank_sbi={
    branch:"Sangola",
    ifsc:"SBIN0021351",
    MICR_code:413002351,
    AccountNo:1234567890
}
console.log(bank_sbi);
const bank_location={
    street:"Pandharpur Road",
    city:"Sangola",
    pin_code:413307
}
console.log(bank_location);
console.log(`--------------Clone objects using Object.assign()---------------`);
let bank_sbiClone=Object.assign({},bank_sbi);
console.log(`Branch:${bank_sbiClone.branch}  ifsc:${bank_sbiClone.ifsc}  MICR:${bank_sbiClone.MICR_code}  AccountNo:${bank_sbiClone.AccountNo}`);

let bank_locationClone=Object.assign({},bank_location);
console.log(`Street:${bank_locationClone.street}  City:${bank_locationClone.city}  Pin_code:${bank_locationClone.pin_code}`);

console.log(`--------------Clone objects using Spread Operator---------------`);
let sbiClone={...bank_sbi};
console.log(`Branch:${sbiClone.branch}  ifsc:${sbiClone.ifsc}  MICR:${sbiClone.MICR_code}  AccountNo:${sbiClone.AccountNo}`);

let locationClone={...bank_location};
console.log(`Street:${locationClone.street}  City:${locationClone.city}  Pin_code:${locationClone.pin_code} `);


const rate_of_interest={
    home_loan_interest:"12%",
    personal_loan_interest:"9%",
    due_interest:"7%"
}

console.log(`-----------------Q5 After Merge bank_sbi,bank_location,rate_of_interest in object sbi_details-------------------`);
let sbi_details={...bank_sbi,...bank_location,...rate_of_interest}
console.table(sbi_details);
console.log(`-----------------Q6 Traverse merged object-------------------`);
for (const key in sbi_details) {
        const element = sbi_details[key];
        console.log(`${key} :${element}`);
}