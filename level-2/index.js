const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

names.forEach(function(name) {
    if (name.includes("Mr.")) {
        console.log(`${name} (male)`);
    }
    else{
        console.log(`${name} (female)`);
    }
});