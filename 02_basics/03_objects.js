//singleton
//Object.create

const user=Object.create({})




//Object.create()
//object literals

const mySym=Symbol("key1")




const JsUser={
"full name": "rajveer singh",    
name:"rajveer", //value
[mySym]:"mykey1",
age:18,
location:"jaipur",
email:"raorajbanna269@gmail.com",
isLoggedIn:false,
lastLoginDays:["monday","saturday"]
} 

console.log(JsUser.email) //.operator to access
console.log(JsUser["email"])
console.log(JsUser["full name"])// .dot me error 
console.log(JsUser.mySym)
// console.group(typeof JsUser.mySym) //string apko [] use krne padenge
console.log( JsUser[mySym])

JsUser.email="rajveerbanna@gmail.com;"
//Object.freeze(JsUser)
JsUser.email="kevin@gmail.com";
console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())


