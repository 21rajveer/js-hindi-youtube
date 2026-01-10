const marvelHeroes=["thor","ironman","spiderman"]
const dcheroes=["superman","flash","batman"]

//marvelHeroes.push(dcheroes)

//console.log(marvelHeroes)
//problem array ke andar array aa gya hai

// const allheroes = marvelHeroes.concat(dcheroes)
// console.log(allheroes);

const all_new_heroes=[...marvelHeroes,...dcheroes]
//ek ek element individual hai
console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("rajveer"))
console.log(Array.from ("rajveer")) //pura array bna dega
console.log(Array.from({name: "hitesh"}))
//intresting case


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))