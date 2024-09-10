// let promiseOne = new Promise((resolve,reject)=>{
//     // doing an async task
//     // db calls, cyrptography, netword related calls
//     setTimeout(function(){
//         console.log("task is completed");
//         resolve()
//     }, 1000)
    
// })

// promiseOne.then(()=>{
//     console.log("function worked!")
// })



// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("I am working, Hii!");
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("I am working, is really working woow!")
// })



// let promiseThree = new Promise(function(resolve,reject){ // here we are making a new promise object in promisethree variable and passing a function in our promise class, also there are two callbacks which are resolve and reject on their specific condition 
//     setTimeout(()=>{ // here we are putting a task in our promise function, setTimeout(it do a task after a specific duration)
//       resolve(['hello','mello','i','am','a','list']) // we are passing an array as a result of resolve, that the task is resolved, and here are the values, they could be actual result or just a simple message
//     },2000) // we are passing a time duration here of 2 seconds which are equal to 2000 milli seconds
// })

// promiseThree.then((result)=>{ // here we are performing the then method, which will work when our promise task get done, and the result will be passed from resolve to here as a parameter
//     for (let i in result){  // here we are putting a for loop why?, we are actually iterating each value of passed array
//     console.log(result[i]) // here we are printing each value with console.log function
//     }
// });


// In below method four I will learn : *about chaining *about .catch() method, *about .finally()

// const Promisefour = new Promise(function(resolve, reject){
  // setTimeout( ()=>{
  //   // we are creating a variable in which we are passing true or false
  //   let error = false; 
  //   // if there is no error then return resolve value as an object, in which we are passing two items(username, and password), after 2 seconds
  //   if(!error){
  //     resolve({username:"vaibhav",password:"1234@goswami"});
  //   }else{
  //     reject("ERROR: Something has went wrong!");
  //   }
  // }, 2000)
// })

// // if promise worked then in first then we get the object as User
// Promisefour.then((User)=>{
//   // we are printing whole object
//   console.log(User);
//   // we are returning the object to next same methond in chain
//   return User;
//   // below it gets object which is returned above
// }).then((user)=>{ 
//   console.log(user.username);
//   return user.password;
//   // again below it gets a item of object which was return above
// }).then((password)=>{
//   console.log(password);
//   // if promise didn't worked then we are passing the error value or message in .catch method
// }).catch((err)=>{
//   console.log("Error says:"+err)
// })
// // if nothing worked then no matter what a finally() method will always work!
// .finally(()=> 
//   console.log("yeah whole promise four worked!!"))





// Promisefive, in this promise we will learn: *how to handle response and reject by async and await

// const Promisefive = new Promise(function(resolve,reject){
//   setTimeout( ()=>{
//     // we are creating a variable in which we are passing true or false
//     let error = true; 
//     // if there is no error then return resolve value as an object, in which we are passing two items(username, and password), after 2 seconds
//     if(!error){
//       resolve({course:"cooking",password:"1234@goswami",duration:"1 year",certificate:"yes"});
//     }else{
//       reject("ERROR: Something has went wrong with cooking course!");
//     }
//   }, 2000)

// })

// async function consumingpromiseFive() {
//   // if promise has successfully worked the try block will get executed else the error will be passed as an argument into catch and then handled
//   try{ 
//     let response = await Promisefive
//     console.log(response)
//   }catch(error){
//     console.log(error)
//   }
// }


// console.log("I am also working with aync") // it's also working while setTimeout() is working asynchronously
// consumingpromiseFive() // the result of promise will be shown when I call async function


/// Deep dive into async await

// async function getUsers(){
//   try {
//     let responseinstr = await fetch("https://jsonplaceholder.typicode.com/users"); // the format of data is not iterable, we need to convert it into array of objects as we saw in the website "https://jsonplaceholder.typicode.com/users"
//     let jsondata = await responseinstr.json() // converting that format into json, it takes time that's why putting a await
//     // console.log(jsondata) // printing data
//     for(let i of jsondata){ // iterating over each object of iterable data
//       console.log(i.id); // printing it's id
//       console.log(i.name); // printing the name key of object
//       console.log(i.address.street) // printing the object inside a object which is street
//     }  
//   } catch (error) { // if there is some error we can handle is smoothly or peacefully
//     console.log("ERR"+error);
//   }
  
// }
// getUsers(); // calling the async function 


// tring above async function with .then() and .catch()
let responseinstr = fetch("https://jsonplaceholder.typicode.com/users"); // the format of data is not iterable, we need to convert it into array of objects as we saw in the website "https://jsonplaceholder.typicode.com/users"
responseinstr.then((response)=>{
  return response.json()
})
.then((iterable)=>{
 for (let i of iterable){
  console.log(i.id, i.name);
 }
})
.catch((err)=> console.log("ERR: " + err))
.finally("thing is completed")




// A function that returns a promise
// function fetchData() {
//   return new Promise((resolve,reject) => {
//       setTimeout(() => resolve("Data received"), 2000);
//   });
// }

// // Async function using await
// async function getData() {
//   console.log("Fetching data...");
//   let data = await fetchData(); // Waits for fetchData to resolve
//   console.log(data);           // Logs "Data received"
// }

// // Calling the async function
// getData();
