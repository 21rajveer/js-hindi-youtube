// let a=10;
// const b=20;

const { use } = require("react");

// var c=30
let a=300;

{} //scope hi hai curly braces //iske bhr globe scope

if(true){
   let a=10;
  const b=20;
  console.log("INNER" , a);
//   var c=30 //isliye var ko avoid scope problem //block scope
}

for(let i=0; i<Array.length; i++){
    const element=Array[i];
}




//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username)
    }
   // console.log(website); //kha acces kr rha hai
    two()//upr vale ne hi error de diya
}
one()

if(true){
    const username="rajveer"
    if(username=="rajveer"){
        const website=" youtube"
    //    console.log(username+website)
    }
  //  console.log(website); 
}
//console.log(username);

//+++++++++ intresting
console.log(addOne(5))
function addOne(num){
  return num+1;
}


addTwo(5)
const addTwo=function(num){ //they both are techniques
    return num+2
}
//now error

//java script concept hoisting

//both are syntax