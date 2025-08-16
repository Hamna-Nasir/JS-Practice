// datatypes 

// primitive data types
// number, string, boolean, null, undefined, symbol


const score = 100;
const isLoggedin = true;
const outsideTemp = null;
let userEmail;
let scoreValue = 100.3;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 234567891234999999543466n;

// non-primitive data types(reference type)
// object, array, function

const heros = ["shaktiman", "naagraj", "doga"]; // array 
let myObj = {
    name: "hamna",
    age: 20,
} // object 


// function as variable
// object function 
const myFunction = function () {
    console.log("hello world");
}
console.log(typeof myFunction);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);


//----------------------------------
//stack memory vs heap memory
// stack (primitive data types)
// heap (non-primitive data types)


let myName = "hamna";
let anotherName = myName;
anotherName = "hamna2";

console.log(myName);
console.log(anotherName);

let user1 = {
  email: "hamna@gmail.com",
  upi: "hamna@ybl",
};
let user2 = user1;
user2.email = "hamna2@gmail.com";
console.log(user1.email);
console.log(user2.email);