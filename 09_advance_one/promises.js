const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography  network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "Chai@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "gaurav", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

const username = promiseFour
.then((user)=> {
    console.log(user);
    return(user.username)
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);  
}).finally(()=> console.log("The promise is either resloved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromisFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromisFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers()

fetch('https://api.github.com/users/Gaurav-kumarsingh')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))