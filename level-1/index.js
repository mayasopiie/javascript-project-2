const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

const gentleMen = names.filter(
    function (name) {
        if (name.includes("Mr.")) {
            console.log(name);
        }
    }
);