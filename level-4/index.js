const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

const newJoinedArray = [];

function joinNewArray(array){
    array.forEach(function(person){
        newJoinedArray.push(person);
    });
}

function printNewArray(){
    newJoinedArray.forEach(function(name){
        console.log(name);
    })
}

joinNewArray(names1);
joinNewArray(names2);
printNewArray();