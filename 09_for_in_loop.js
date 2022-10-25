const person={
    fullName:"Sachin Tendulkar",
    age:42,
    isMarried:true,
    city:"pune"
}

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element);
    }
}