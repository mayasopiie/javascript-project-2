const names = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
];

names.forEach(function (name) {
    const checkDataType = typeof name;
    if (checkDataType !== "string") {
        const index = names.indexOf(name);
        if (index !== -1) {
            names.splice(index, 1);
        }
    }
});


names.forEach(function (name){
    console.log(name);
})