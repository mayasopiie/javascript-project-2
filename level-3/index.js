const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

function searchName(initial){
    names.filter(function(name){
        if (name.includes(initial)){
            console.log(name);
        }
    });
}

searchName("Pa");