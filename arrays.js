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

//remove last element
arrayObjects.pop();

console.log(arrayObjects);
//Create new element and add it to the end
newObj4 = {
    ID: '7', 
    Name: 'Bilbo', 
    Occupation: 'None', 
    Age: '111'};

    arrayObjects.push(newObj4);
console.log(arrayObjects);


//find the average age using a loop.
let sum=0;
for(let i in arrayObjects){
    sum=sum+Number(arrayObjects[i].Age);
}
sum=sum/arrayObjects.length;
console.log(`The Average age is ${sum}`);


//lower case the keys
//convert the final set of data back to a srting.
