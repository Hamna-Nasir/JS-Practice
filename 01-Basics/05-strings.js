let name = "hamna";
let repoCount = 20;


//console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 const gameName = new String("hamna-123");


 console.log(gameName[0]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('n'));
 const newstring = gameName.substring(0,4);
 console.log(newstring);

 const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newString1 = "   hamna   ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://hamna.com/hamna%20Nasir";
console.log(url.replace('%20', '-'));
console.log(url.includes("developer"));
console.log(url.includes("hamna"));

console.log(gameName.split("-"));