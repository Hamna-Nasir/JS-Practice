// date and time 
let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23 , 5, 7, 38);

let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);

newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Pakistan",
});
