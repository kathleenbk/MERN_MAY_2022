// ---- HOISTING / SCOPE ------
// var x;
const x = 33; // anchor
// LET and CONST
// x = "hello";
// console.log(x); // ?


// hi("john");


// function hi(name) {
//     var x = 100;
//     // console.log("hello " + name);
// }

// console.log(x); // ?








// console.log(arr);
// for (let i = 0; i<arr.length; i++) {
//     const num = i + 10;
// }

// ------ DESTRUCTURING ---------
// const person = new Person()
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
//       key         key  as            object
const { username, firstName: coolName } = person;
// console.log(coolName);
// console.log(username);

//                 0         1       2             
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [, dog, varName, , last] = animals;
// console.log(dog, varName, last);

const msg = "hello";
msg[2];
const [, l] = msg;
// console.log(l);

// const personName = person["firstName"];
// const personEmail = person.email;
// const personCreate = person.createdAt;
// console.log(personName);
// console.log(personEmail);

// OBJECTS, ARRAYS, complex data types (Classes)
// are pass by reference 
// ---- REST / SPREAD -----
const a = [10, 20, 30];
const b = a;
const c = [...a];

a.push(9000);
b.push(2000);
// c.push(100000);

console.log(a); // ?
console.log(b); // ?
console.log(c); // ?


// Pass by value
// x = 3;
// y = x;

const person2 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const person3 = person2;
console.log(person3 === person2);

const copyPerson = { ...person2 };
console.log(copyPerson === person2);


//   person2 = "hi";
// person2.firstName = "john";
// console.log(person2);

// ARROW FUNCTIONS -------------------
console.log("\n\n----- arrow functions --------");

// function pow() {
//     return 3*3;
// } 

const pow = function () {
    return 3 * 3;
}

const powArrow = () => {
    console.log("arrow!!!!");
}

const powShort = () => console.log("hello");

// powArrow();
// powShort();

// console.log(pow());

// setTimeout( () => console.log("123"), 1000);

const funcName = function (name) {
    console.log(`hello ${name}`);
}

const funcNameArrow = (name) => {
    console.log(`hello ${name}`);
}

// funcName("Bob");
// funcNameArrow("Bob");

// function getValueFromId(id){
//     console.log("hello");
//     return document.getElementById(id).value;
// }

// const getValueFromId2 = (id, someText) => document.getElementById(id).value;

// TERNARY
const apiData = true;

const ternary = () => {

    if (apiData) {
        return "yes"
    } else {
        return "no"
    }

    apiData ? "<p> asdasds</p>" : "loading..";
}