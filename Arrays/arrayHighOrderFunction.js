// foreach function 
let arr = [1, 2, 3, 4, 5]

// for each doesnot return anything
arr.forEach((val)=> {
    console.log(val*2)
})


// Map returns an array 
let newArr = arr.map((val)=>{
    return  val * 2;
})
console.log(newArr)

// filter

let even = arr.filter((val) => {
    return val % 2 === 0
})
console.log(even)

// findIndex
let idx = arr.findIndex((val) => {
     return val === 2
})
console.log(idx)

// Sort 
let sortExample = [9, 5, 2, 3]
sortExample.sort((a, b) => {
    return a - b
})
console.log(sortExample)


// concat
let a = "Vivek "
let b = "Saha"

let c = a.concat(b)
console.log(c)