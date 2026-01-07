// #primitive 
//7 categories me hote hai  -> call by value copy me changes hote hai 
//string ,number,boolean,null,undefined,symbol,BigInt

//const score=100
//const scoreValue=100.3

const isLoggedIn=false; ///boolean type
const outsideTemp=null; //empty hai
//let userEmail; //undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

//const bigNumber=34567890123n
typeof bigNumber




// non primitive (refrence type)
//arrays,objects,functions 

const heroes=["shaktiman", "naagraj","doga"]
  let myObj= { 
    name: rajveer  //objects 
    age: 22,

}

//function as variable treat

const myFunction=function(){
    console.log("hello  world");
}

console.log(typeof bigNumber);

//type of val->null  -> object 
//type of function   -> function object


//memory stack(primitive) ,heap(non primitive)
//copy milegi               //refrence me change

let myYoutubename="hiteshchoudhary"


let anothername=myYoutubename
anothername="chai aur code";

console.log(anothername);


let userone={
  email:"user@googlee.com"
  upi: :user@ybl
}

let userTwo=userone; //refrence 

userTwo.email="hitesh@goggle.com"
console.log(userone.email);
console.log(userTwo.email);