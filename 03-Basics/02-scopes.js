
let a = 300;
if(true){
    let a = 10; //block-scoped (only visible within the block)
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Hamna";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();


if(true){
    const userName = "Hamna";
    if(userName === "Hamna"){
        const website = " Youtube";
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);






// ---------------------------------intresting 


console.log(addOne(5));

function addOne(num){
    return num + 1;
}



const addTwo = function (num){
    return num + 2 ;
}
console.log(addTwo(5));