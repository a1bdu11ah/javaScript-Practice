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