// //MERGIN 2 OR MORE ARRAYS
// const marvel = ['thor', 'spiderman','captain','hulk']
// const dc = ['batman', 'flash','superman']
// const all = [...marvel,...dc]
// const all2 = marvel.concat(dc)
// console.log("SPREAD OPERATOR: ",all)
// console.log("CONCAT METHOD: ",all2)
// //at a time only 2 ARRAYS can be MERGED using CONCAT METHOD


// // KAAM KI CHEEZ
// const nested_arr = [1,2,3,[4,5],[6,7,['spider','monkey']]];
// const without_nesting = nested_arr.flat(Infinity);
// console.log(without_nesting)

// CREATE ARRAY FROM (STRING,OBJECT,....) 
console.log(Array.isArray('Vishal'))
console.log(Array.from('vishal'))
const name_obj = {first:"vishal",last:"jangid"}
console.log(Array.from(Object.values(name_obj)))
// CREATE NEW ARRAY FROM SET OF ELEMENTS
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))