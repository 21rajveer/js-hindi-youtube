// array

const myArr = [0, 1, 2, 3, 4, 5]
myArr.push(6);
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //start me add
// myArr.shift()   //start se remove

// console.log(myArr.includes(9)); true or false values
// console.log(myArr.indexOf(3));  index return krna

// const newArr = myArr.join()  //array ko string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //start ko include end index ko exclude

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //start se elements remove 
//kitne remove krne hai
console.log("C ", myArr);
console.log(myn2);

//slice returns a shallow copy without modifying the original array
//splice() modifies the orginal array be removing 
//or adding eleemnts

const names=["rajveer","rakshit","kartik"]
console.log(names.splice(0,1));
//splice mtlbh index 0 se ek element remove
//array.method hai

