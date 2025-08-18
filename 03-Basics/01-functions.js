function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("N");
    console.log("A");
}

// sayMyName();


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3, null);
//console.log("Result: ", result);


function loginUser(username = "Hamna") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUser("Hammad"));

// const user1 = loginUser("Hamna");
// console.log(user1);
 

function calculateCartPrice(var1 , var2, ...num1) {
  // ... is called rest operator
  return num1;
}

// console.log(calculateCartPrice(100, 200, 300 , 400));


// const user = {
//     username : "Hamna",
//     id : "001"
// }

function handleObject (anyObj){
    console.log(`Username is ${anyObj.username} and id is ${anyObj.id} `);
}

handleObject({
    username : "Hammad",
    id : "002"
});

const myNewArray = [200 ,300,400,500];
function returnSecondValue(getArray){
 return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,500,400,800]));