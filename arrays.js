const data ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let array = data.split(`\n`)

let newArray1 = array[0].split(',');
//console.log(newArray1);

//convert o lowercase
// for(let i in newArray1) {
//      newArray1[i].toLowerCase();
// };
//I was trying to lower case this here but I could not get this to work. I left my attempt here but commented out. It did not break my code when it ran, it just didn't seem to do anything.


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

obj1 = {};
for(const key in newArray1) {
    
    obj1[newArray1[key]] = `${newArray2[key]}`;
}
obj2 = {};
for(const key in newArray1) {
    obj2[newArray1[key]] = `${newArray3[key]}`;
}
obj3 = {};
for(const key in newArray1) {
    obj3[newArray1[key]] = `${newArray4[key]}`;
}
obj4 = {};
for(const key in newArray1) {
    obj4[newArray1[key]] = `${newArray5[key]}`;
}
arrayObjects =[obj1,obj2,obj3,obj4];
console.log(arrayObjects);

//remove last element
arrayObjects.pop();
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



//convert the final set of data back to a srting.
const csvString =[
    [
        'ID',
        'Name',
        'Occupation',
        'Age'
    ],
    ...arrayObjects.map(item => [
        item.ID,
        item.Name,
        item.Occupation,
        item.Age
    ])
]
.map(e =>e.join(','))
.join("\n");

console.log(csvString);

