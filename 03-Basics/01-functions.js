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

console.log(loginUser("Hammad"));

// const user1 = loginUser("Hamna");
// console.log(user1);
