


// function sayMyName(){
// console.log("R")
// console.log("A")
// console.log("J")
// console.log("V")
// console.log("E")
// console.log("E")
// console.log("R")

//const { use } = require("react");

// }

//sayMyName()

// function addTwoNumberes(number1, number2){ //parameteres
//   console.log(number1+number2);
// }

// function addTwoNumberes(number1, number2){ //parameteres
// //   let result=number1+number2;
// //   console.log("rajveer")
//   return number1+number2;//return ke bd function koi kaam nhi karega
// }

// const result=addTwoNumberes(3,4) //call ke andr arguments
// console.log("result:", result);


// function loginUserMessage(username){
//   if(!username){ //username===undefined
//    console.log("please enter a username");
//    return 
//   }
//   return `${username} just logged in`
// }

// //console.log(loginUserMessage("rajveer"))
// console.log(loginUserMessage(""))
// //if i dont paseed value then undefined

// console.log(loginUserMessage("rajveer"))


function sayHelllo(){
  console.log("hello");
} //return sirf function ke andar use hota hai
 sayHelllo();

 function multiplytwonos(num1,num2){
  return num1*num2;
 }
 const result=multiplytwonos(3,3);
 console.log(result);

 function loginUserMessage(username){
   if(!username){
    console.log("please enter a username");
    return 
   }
   return `${username} just logged in`
 }
 console.log(loginUserMessage("raj"))

 function clasroom(name="students"){
return `${name} no of benches are`
 }
 console.log(clasroom("rajveer"))

 function calculateBill(amount){
   if(!amount){
    return "amount missing"
   }
   else{
    return amount+50;
   }
 }
 console.log(calculateBill(200));
 console.log(calculateBill());