/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
let num = Math.floor(Math.random() * 10) + 1;

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/

function greeting(name, gender, isSelf) {
   // do stuff here ...
   let prefix = "";
   let greet = "";
   let greetMess = "";
   if (isSelf === true) {
      prefix = prefixes[0];
   } else if (gender === "male") {
      prefix = prefixes[1]; 
   } else if (gender === "female") {
      prefix = prefixes[2];
   } else 
      prefix = prefixes[3];
 
   if (num < 3) {
      greet = greetingWords[0];
   } else if (num < 6 && num >= 3) {
      greet = greetingWords[1]; 
   } else 
      greet = greetingWords[2];

      greetMess = greet + ", " + prefix + " name is " + name;
      let gword = (greetMess.charAt(0).toUpperCase());
      greetMess = gword + greetMess.slice(1)

   return greetMess;
 }
    
/*const message = greeting("Adam", "male", true);
console.log(message); // Hi, my name is Adam
*/

const message = greeting("Elizabeth", "nonbinary", false);
console.log(message); // Hey, their name is Elizabeth;*/

