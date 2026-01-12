//const tinderUser=new Object() //singleton object 
const tinderUser={} //non singleton object
tinderUser.id="123abc"
tinderUser.name="rajveer";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
///console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}// problem of nested
//const obj3=Object.assign({},obj1,obj2) //sb combined hojayegi


//spread operator
const obj3={...obj1,...obj2}
console.log(obj3);

// const useres=[
//     {
//         id:1,
//         email:"b@gmail.com"
//     }
// ]  //array ke andr bht saare objects hai unko loop thorugh krna hai sbke andr

// useres[0].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //saari keys ko liya array me rkh diya
// //aray ke from me ajayegi
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//JSON and API
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh",
    learner:"rajveer"
}

//course.courseInstructor

const {courseInstructor}=course

//console.log(courseInstructor);

const {learner:boy}=course
console.log(boy);

// const navbar=({company})=>{ //destructuring

// }
// navbar(company="hitesh")

// {//JASON
// "name":"rajveer",
// "coursename":"js in hindi",
// ""price":'free'
// }


[
    {},{},{}
]