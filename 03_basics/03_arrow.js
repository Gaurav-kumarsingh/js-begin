const user = {
    username: "gaurav",
    price: 999, 

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "gaurav"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "gaurav"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "gaurav"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({usernaem: "gaurav"})


console.log(addTwo(3, 4));
