//immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
}()); //global scope ke pollution se problem hoti hai
//hatane ke liye

 ( (name)=> { //semicolon ki dikkat thi 
    console.log(`DB CONNECTED TO${name}`);
 })('rajveer')