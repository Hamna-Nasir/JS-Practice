const userEmail = [];
if (userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have email");
}


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??) : null undefined
 let val1 ;
//  val1 = 5 ?? 10;
//  val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

 console.log(val1);

//  ternary Operator
// condition ? true : false

const icedTeaPrice = 1000;
icedTeaPrice <= 800 ? console.log("Less than 800") : console.log("More than 800")