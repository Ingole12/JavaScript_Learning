function gradeSystem(score) {
   
    switch (true) {
        case score < 35&& score>=0 &&score!=" " &&score!=null:
                console.log(`You are Failed with ${score}%`);
            break;
        case score>=35&&score<60: 
        console.log(`You are Passed with ${score}% & Grade  C`);
            break;   
        case score>=60&&score<75: 
        console.log(`You are Passed with ${score}% & Grade  B`);
            break; 
        case score>=75&&score<90: 
        console.log(`You are Passed with ${score}% & Grade  A`);
            break;
        case score>=90&&score<=100: 
        console.log(`You are Passed with ${score}% & Grade  A+`);
            break;          
        default :
        console.log(`Invalid input: ${score}`); 
            break;
    }
}

gradeSystem(66);
console.log('----------------------------');
gradeSystem(13);
console.log('----------------------------');
gradeSystem(" ");
console.log('----------------------------');
gradeSystem(98);
console.log('----------------------------');
gradeSystem("fifty Five");
console.log('----------------------------');
gradeSystem(35);
console.log('----------------------------');
gradeSystem(75);
console.log('----------------------------');
gradeSystem(null);
console.log('----------------------------');
gradeSystem(undefined);
console.log('----------------------------');
gradeSystem(-20);
console.log('----------------------------');
gradeSystem(55);
console.log('----------------------------');
gradeSystem(82);









// function gradeSystem(score) {
//     if (score < 35&& score>=0 &&score!="" &&score!=null) {
//         console.log(`Your mark:"${score}" Sorry ,You are Failed ...KEEP TRYING`);
//     }
//     else {
//         if (score >= 35 && score < 60) {
//             console.log(`Your mark:"${score}" and You are Passed with Grade  "C"`);
//         }
//         else {
//             if (score >= 60 && score < 75) {
//                 console.log(`Your mark:"${score}" and You are Passed with Grade  "B"`);
//             }
//             else {
//                 if (score >= 75 && score < 90) {
//                     console.log(`Your mark:"${score}" and You are Passed with Grade  "A"`);
//                 }
//                 else {
//                     if (score >= 90 && score <= 100) {
//                         console.log(`Your mark:"${score}" and Heartly Congrats! You are Passed with Grade  "A+"`);
//                     }
//                     else {
//                         console.log(`Your Mark:"${score}"  Invalid Input`);
//                     }

//                 }
//             }
//         }

//     }
// }
// gradeSystem(66);
// gradeSystem("Fifty Five");
// gradeSystem(undefined);
// gradeSystem(13);
// gradeSystem(35);
// gradeSystem(-20);
// gradeSystem("");
// gradeSystem(75);
// gradeSystem(55);
// gradeSystem(98);
// gradeSystem(null);
// gradeSystem(82);