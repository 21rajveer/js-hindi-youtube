/*const name="rajveer"
const repoCount=50

console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is${repoCount}`);
//modern era me ese likh skte 

const gameName=new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('5'));
console.log(gameName.indexOf('t'));
console.log(gameName); //refence me no change

 const newString=gameName.substring(0,4);
 console.log(newString);

const anotherString=gameName.slice(-8,4); // we can use negative values in this only
console.log(anotherString)

const newStringOne="  hitesh  "
console.log(newStringOne.trim()); //spaces remove krdeta hai

const url="https://banna.com/banna%20choudhary"
console.log(url.replace('%20','-'))  //usable hai

console.log(url.includes('hitesh')) //yeh keyword hai ya nhi

console.log(gameName.split('-'));  */



let name ="rajveer"
let city='jaipur'
let message=`hello my name is${name} and my city is ${city}`;
console.log(message);

//js strings are immutable cannot chjanged directly
//string immutablity

let str="hello"
str[0]="H";
console.log(str); //no change 

str="H"+str.slice(1);
console.log(str);  //string are stored in stack but actual value is immuatable

let str2="rajveersingh"
console.log(str2.length);
//12 includes space also


//access characteres
let warrior="maharana pratap";
console.log(warrior[0]);
console.log(warrior.charAt(1));

//string methods
//.to uppercase()
//.tolowercase()

let warriorr="maharana";
console.log(warrior.toLocaleUpperCase());

//trim() , trimStart(), trimEnd()
let enemy="  khilji  "
str.trim();
str.trimStart();
str.trimEnd(); //used in form validation


//slice(start,end)

let str3="javascript";
console.log(str3.slice(0,4));
console.log(str3.slice(-6)); //negative indexing allowed

//substring 
console.log(str3.substring(0,4)); //negative index not allowed


let str4="hello rajveer";
console.log(str4.replace("hello","milo toh shi"))
//replacALL if multiple words are there 

//split();
console.log("hello","rajveer".split(' , '));

let str5="rajveer kas roman";
console.log("rajveer kas roman".split(","))

//join 
let str6=['r','a','j'];
console.log(str6.join(""))  //array method 

//includes() //hai ua nhi
let str7="rajveer is doing coding";
console.log(str7.includes("rajveer"));

//startsWith()
console.log(str7.startsWith("rajveer"));
//endsWith()

//template literals
let namee="rajveer";
let age="21"

console.log(`my name is ${namee} and my age is ${age}`);

//string comparison
"apple"==="apple"; //true
"Apple"==="apple"; //false //case sensitive


let stringg="hello";
let reversed=str.split("").reverse().join("");  //arrays have reverse method 
console.log(reversed);

let str8="madam";
let rev=str8.split("").reverse().join("");
console.log(str8===rev);

let str9="hello"
let count={};

for(let ch of str9){
    count[ch]=(count[ch] || 0)+1
}
console.log(count);

let state="chennai";
let capital=state;
capital="hello";
console.log(state); //call by value stored in stack value copied













