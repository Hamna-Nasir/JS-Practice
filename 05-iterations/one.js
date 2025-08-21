// for 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is Best Number");
    }
    // console.log(element);

}


// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`)
        // console.log(i + ' * ' + j + " = " + (i*j))
    }
    
}

let myArr = ["flash" , "batman" , "superman"];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
    
}


// break & continue 

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(`value of i is ${i}`)
    
// }

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${i}`)
    
}