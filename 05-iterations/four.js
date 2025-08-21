const myObj = {
    JS : "Javascript",
    CPP : "C++",
    RB : "Ruby",
    SWIFT : "Swift by Apple"
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// const myArr = ["js", "C++" , "Swift" , "Java"];
// for (const key in myArr) {
//     console.log("")
// }

const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States Of America");
map.set('PK' , "Pakistan");
map.set('PK' , "Pakistan");

for (const [key] in map) {
    console.log(key);
}