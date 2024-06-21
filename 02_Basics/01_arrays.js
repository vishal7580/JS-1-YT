// // const arr = [1,2,3,4,5]
// // const numString = arr.join('')  
// // console.log(numString)

// // null, undefined CONVERTED to emtpy string
// const arr = [null,undefined,null]
// const numString = arr.join('')  
// console.log(numString)

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   const matrixString = matrix.join(',').split(',').join(' ')
//   console.log( matrixString);


// DIFF B/W SLICE and SPLICE

// // SLICE not mutates ORIGINAL ARR but
// // returns substring (starI,lastI)
// const arr = [0,1,2,3,4,5]   
// console.log("Original: ",arr)
// const arr2 = arr.slice(1,3);
// console.log("slice: ",arr2)
// console.log("Original: ",arr)
// // SPLICE mutates ORIGINAL ARR and
// // returns REMOVED ELEMENTS
// // const arr = [0,1,2,3,4,5]   
// // console.log("Original: ",arr)
// // const arr2 = arr.splice(1,3);
// // console.log("sPlice: ",arr2)
// // console.log("Original: ",arr)