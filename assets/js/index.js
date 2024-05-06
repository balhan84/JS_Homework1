let a = 12;
let b = 5;
console.log(a * b);

let c = 25;
let d = 5;
console.log(c / d);

let e = 10;
let f = 10;
console.log(e + f);

let number = 11;
let boolean = true;
let string = "java script";
let row = "100";
console.log(11, true, "java script", "100");

let num = 1;
// num = num + 11;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// const userNumber = prompt("Input number", "0");
// const numberDouble = userNumber ** 2;
// console.log("Result:", numberDouble);

// const firstNumber = Number(prompt("Input firstNumber:", "0"));
// const secondNumber = +prompt("Input secondNumber:", "0");
// const average = (firstNumber + secondNumber) / 2;
// console.log("Result:", average);

// const userMinute = Number(prompt("Input userMinute:", "0"));
// const second = userMinute * 60;
// console.log("Result:", second);

// const greeting = "Hello,";
// const userName = prompt("Input name:", "name");
// alert(greeting + userName + "!");
// document.write("<p>" + greeting + " " + userName + "!" + "</p>");

const userFirstname = prompt("Input firstname:", "Firstname");
const userLastname = prompt("Input lastname:", "Lastname");
const userAge = Number(prompt("Input age:", "20"));
const userEmail = prompt("Input email:", "anna@gmail.com");
const userPhone = prompt("Input phone:", "09712345678");
const userPhoto = prompt(
  "Input photo:",
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
);
document.write(
  "<h>" + userFirstname + " " + userLastname + "</h>",
  "<p>" + userAge + "</p>",
  "<p>" + userEmail + "</p>",
  "<p>" + userPhone + "</p>",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png>"
);
