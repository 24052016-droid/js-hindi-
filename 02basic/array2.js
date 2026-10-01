const marvel_heros=["thor ","ironman ","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heros.push(dc)
console.log(marvel_heros)
//array isnide array 
const b=marvel_heros.concat(dc)
console.log(b)
const c=[...marvel_heros,...dc]
console.log(c)
const another_array =[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.isArray({name:"hitesh"}))

let s1=100
let s2=200
let s3 =300
console.log(Array.of(s1,s2,s3));