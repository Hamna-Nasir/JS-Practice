// Singleton
// Object.create

// object literals

const mySym = Symbol("key1");


const jsUser = {
  name: "Hamna",
  age: 22,
  [mySym]: "myKey1",
  Location: "Karachi",
  email: "hamna@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(jsUser.email);
// console.log(jsUser["email"]);


jsUser.greetings = function () {
    console.log("Hello JS User !")
}
jsUser.greetingsTwo = function () {
    console.log(`Hello JS User ${this.name} !`)
}

// console.log(jsUser.greetings);
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());