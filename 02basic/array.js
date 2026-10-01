//array are reasible 
const array = [1,2,3,4,"prajkta",true]
console.log(array[0])
const hero=["shakti man ","naagraj"]
console.log(array[0])
consta2=new Array(1,2,3,4)
console.log(array[0])
//methods 
array.push(6)
console.log(array)
array.pop()
console.log(array)
array.unshift(9)
console.log(array)//addd at starting 
array.shift()
console.log(array)//remove 9  at starting 
console.log(array.includes(9))
console.log(array.indexOf(3))
const newarr=array.join()
console.log(array)
console.log(typeof newarr)
const myn1=array.slice(1,3)
const myn2=array.splice(1,3)
console.log("a",array)
console.log("b",myn1)
console.log("c",myn2)

//slice same array  where as splice oroginal array gets manipulted 