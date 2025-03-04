const user = {
    username: "gaurav",
    loginCount: 8,
    signedIn: true,

    gerUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        }
}




// console.log(user.username);
// console.log(user.gerUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcom ${this.username}`);
        
    }

    return this
}

const userOne = new User("gaurav", 12, true)
const userTwo = new User("ChiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);