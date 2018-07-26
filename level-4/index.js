const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

//--- Initiation of new empty array
const newJoinedArray = [];

//--- Initiation of function for pushing every single element on array into new array
function joinNewArray(array){
    array.forEach(function(person){
        newJoinedArray.push(person);
    });
}

//--- Initiation of function for printing new filled array
function printNewArray(){
    newJoinedArray.forEach(function(name){
        console.log(name);
    })
}

//Pushing element of 'names1' array into 'newJoinedArray' array
joinNewArray(names1);

//Pushing element of 'names1' array into 'newJoinedArray' array
joinNewArray(names2);

//Print new 'newJoinedArray' array after get pushed by elements from 'names1' and 'names2' array
printNewArray();