const user={
    username:"rajveer",
    price:1000,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`) //this->means current context
        console.log(this);
    }

}

 user.welcomeMessage()
 user.username="rajveer singh"; //value change krdiya
 user.welcomeMessage()

//console.log(this)

//browser ke andar window object hai

// function chai(){
//     let username="rjaveer"
//     console.log(this.username); //object ke andar ki kaam karega
// }

// chai() //bhut saare performation aate hai


// const chai=function(){
//     let username="virat"
//     console.log(this.username)
// }
// chai()

// const chai=()=>{
//      let username="virat"
//     console.log(this)
//  }
//  //chai()

//  const addTwo=(num1,num2)=>{ //explicit return
//     return num1+num2
//  }
//  addTwo(3,4)
//  console.log(addTwo(3,4))

 //implicit return
 const addTwo=(num1,num2)=>( num1+num2)
 const multiply=(num11,num22)=>({product: num11*num22});
 console.log(multiply(3,4))
 console.log(addTwo(3,4));

 const myArray=[2,5,3,7,8]

 myArray.forEach(function() {} )

 


