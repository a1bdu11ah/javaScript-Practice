const mySymbol = Symbol("mySymbol");

const JsUser = {
    [mySymbol]: "mykey1",
    name: "abdullah",
    age: 20,
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};
console.log(JsUser.name);
console.log(typeof JsUser[mySymbol]);

JsUser.age = 21;
console.log(JsUser.age);

JsUserfunction = function () {
    console.log("Hello from JsUserfunction");
}
console.log(JsUserfunction());

JsUser.greeting1 = function () {
    console.log(`Hello from JsUser function ${this.name}, you are ${this.age} years old.`);
}
console.log(JsUser.greeting1());

const instagramUser = {
    username: "abdullah",
    password: "12345",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};
console.log(instagramUser.username);
console.log(instagramUser.password);

const users = {
    email: "abdullah@gmail.com",
    fullName:{
        userFullName: {
            firstName: "Abdullah",
            lastName: "chaudry",
        }
    }
};
console.log(users.fullName.userFullName.firstName.at(3) + users.fullName.userFullName.lastName.at(5));