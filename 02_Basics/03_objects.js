// when object created through CONSTRUCTOR SINGLETON created

// //OBJ LITERALS
// let user = {
//     email: "hello@hotmail.com",
//     'full name': 'vishal jangid'
// }
// console.log(user.email)
// console.log(user['email'])
// console.log(user['full name'])




// // DECLARING SYMBOL IN OBJECT 
// const mySym = Symbol('key1')
// const user = {
//     name: 'vishal',
//     [mySym]: 'mykey1', //THIS IS SYNTAX OF SYMBOL

//     email: 'hotmail'
// }
// console.log(user[mySym])    

// // PREVENT OBJ FROM MODIFICATIONS and ADDITION OF NEW PROPERTIES 
// Object.freeze(user) 
// user.email = 'email'
// user["lastName"] = 'jangid'
// console.log(user.email)
// console.log(user.lastName)




// const user ={
//     name: 'Mark',
//     age: 33
// }
// user.greentings = function() {
//     console.log(`Hello, ${this.name} Bro`)
// }
// console.log(user.greentings())

// //Arrow functions do not have their own this context. 
// user.greentings2 = () => {
//     console.log(`Hello, ${user.name} Bro`)
// }
// console.log(user.greentings2())
