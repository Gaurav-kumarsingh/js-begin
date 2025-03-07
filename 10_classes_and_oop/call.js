function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, emai, password){
    SetUsername.call(this, username)

    this.emai = emai
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
