// singleton
// Object.create

// object leterals

const mySym = Symbol("key1")


const JsUser = {
    name: "Gaurav",
    "full name": "Gaurav kumar",
    [mySym]: "mykey1",
    age : 18,
    location: "Bihar",
    email: "gaurav@google",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "gaurav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "gaurav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
