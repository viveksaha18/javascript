// Array Methods

// 1. toString() --> Converts the array into a string 

// const arr = ["apple", "mango", "banana"]
// console.log(arr);
// let str = arr.toString();
// console.log(typeof(str));


// 2. at() -> Returns specified index in an array
// const arr = ["Red", "Blue", "Orange", "Green"]
// console.log(arr.at(1));


// 3. forEach --> Used for looping in array

// const color = ["Red", "Blue", "Orange"]
// color.forEach((item) => {
//     console.log(item);
// })

// 4. join --> Joins all elements of array into a single string

// const color = ["Red", "Blue", "Orange"];
// const str = color.join();
// console.log(str);
// console.log(typeof(str));

// 5. pop() --> Removes the last element from the array


// const arr = [1, 2, 3, 4];
// console.log(arr);
// arr.pop();
// console.log(arr);

// 6. push() --> use to add one or more elements to the end of the array

// const arr = [1, 2, 3, 4];
// console.log(arr);
// arr.push(5);
// console.log(arr);


// 7. shift() --> Removes the first element of the array 

// const arr = [1, 2, 3, 4];
// console.log(arr);
// arr.shift();
// console.log(arr);


// 8. unshift() --> Add new element in the start of the array 

// const arr = [1, 2, 3, 4];
// console.log(arr);
// arr.unshift(9);
// console.log(arr);

// 9. concat() --> Method used to concatenate or join two or multiple arrays into a new array.

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2);
console.log(arr3);


// 10. copyWithin() --> shallow copies the specified part of an array to another location 

// 11. flat() --> Returns  