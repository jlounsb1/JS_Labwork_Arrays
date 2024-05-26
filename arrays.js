/*
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

*/

const data ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let array = data.split(`\n`)

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
console.log(array)
combinedArray = [newArray1, newArray2, newArray3, newArray4, newArray5];
console.log(combinedArray);


// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

obj1 = {};
for(const key in newArray1) {
    console.log(`${newArray1[key]}: ${newArray2[key]}`);
    obj1[newArray1[key]] = `${newArray2[key]}`;
}

console.log(obj1);

obj2 = {};
for(const key in newArray1) {
   
    obj2[newArray1[key]] = `${newArray3[key]}`;
}

console.log(obj2);

obj3 = {};
for(const key in newArray1) {
    
    obj3[newArray1[key]] = `${newArray4[key]}`;
}

console.log(obj3);

obj4 = {};
for(const key in newArray1) {
    
    obj4[newArray1[key]] = `${newArray5[key]}`;
}

console.log(obj4);

arrayObjects =[obj1,obj2,obj3,obj4];
console.log(arrayObjects);