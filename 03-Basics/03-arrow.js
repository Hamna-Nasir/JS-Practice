const user = {
    userName : "Hamna",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Hammad";
// user.welcomeMessage();

// console.log(this);

// function Chai() {
//     const userName = "Hamna";
//     console.log(this.userName);
// }
// Chai();


const Chai1 = function () {
    const userName = "Hamna";
    console.log(this.userName);
}
// Chai1();


const Chai2 = () => {
    const userName = "Hamna";
    console.log(this);
}
// Chai2();

// const addTwo = (num1 ,num2) => {
//     return num1 + num2 ;
// }
// console.log(addTwo(3 ,4));


// const addTwo = (num1 ,num2) => num1 + num2 ;   //implicit
// const addTwo = (num1 ,num2) => (num1 + num2) ;  
const addTwo = (num1 ,num2) => ({name : "Hamna"}) ;  




console.log(addTwo(3 ,4));