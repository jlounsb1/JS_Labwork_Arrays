/*
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

*/
const columns =[];
const data ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let array = data.split(`\n`)
// let cell =[];
// array.forEach((i) => {
//     if(i !=','){
//         cell +=i
//     } else array.push(i)
// });

// for (const c of data) {
//     if(c!=',' && c!='\n'){
//         columns +=c;
//     }
// }
let newArray1 = array[0].split(',');
//console.log(newArray1);

let newArray2 = array[1].split(',');
//console.log(newArray2);

let newArray3 = array[2].split(',');
//console.log(newArray3);

let newArray4 = array[3].split(',');
//console.log(newArray4);

let newArray5 = array[4].split(',');
//console.log(newArray5);

combinedArray = [newArray1, newArray2, newArray3, newArray4, newArray5];
console.log(combinedArray);

// array.forEach((element) =>{
//     columns.push(element);
// });
// console.log(columns)


// console.log(array)
// console.log(cell)



// const names = ["John", "Abagail", "Jerome", "Jeff", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello, " + names[i] + "!";
// 	console.log(greetings[i]);
// }

