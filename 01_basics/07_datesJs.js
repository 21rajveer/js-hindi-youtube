//Dates

let myDate=new Date()
console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)  //date ek object hi hai

// let myCreatedDate= new Date(2023,0,23); //month 0 se start
 //let myCreatedDate= new Date(2023,0,23,5,3); 
//onsole.log(myCreatedDate.toLocaleString())

//let myCreatedDate=new Date("2026-01-01")
let myCreatedDate=new Date("1-7-2026")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
 console.log(Math.floor(Date.now()/1000));

 let newDate=new Date();
 console.log(newDate.getMonth()+1);

 // `${newDate.getDay()} and the time`

 newDate.toLocaleString('default',{
    weekday: "narrow",
    timeZone: ' '
 })






