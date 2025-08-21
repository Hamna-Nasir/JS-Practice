const coding = ["js" , "python" , "java" , "c" , "C++" , "swift"];

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index ,array)=>{
//     console.log(item , index,array);
// })

const myCoding = [
    {
        languageName : "javascript",
        languagefileName : "JS"
    },
    {
        languageName : "java",
        languagefileName : "JAVA"
    },
    {
        languageName : "python",
        languagefileName : "PY"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languagefileName);
})