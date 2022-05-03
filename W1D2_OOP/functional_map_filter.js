// Functional programming
// .map() .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const modifiedAnimals = animals.map( function(animalElement) {
    return `${animalElement} is cool`;
});

// returns a new array that loops over every element and does something
const modifiedAnimalsFunctional = animals.map( (unicorn, idx) => {
    // console.log("i'm inside the " + unicorn);
    return `${idx+1} -- ${unicorn} is cool`;
})

// const veryShort = animals.map( e =>`${e} is cool`);

// console.log(modifiedAnimalsFunctional); 
// console.log(animals); // original array does not get altered

// -------filter ---------
const filteredAnimals = animals.filter( (animal) => {
    if (animal.length <= 5) {
        return true;
    } else {
        return false
    }
});

const filteredAnimals2 = animals.filter( (a) => a.length <= 5);
// console.log(filteredAnimals2);

// combine filter and map
const combineFilter = animals.filter( (animal) => animal.includes("o")).map( el => el + " contains an 'o'");
// console.log(combineFilter);

// ------------
const people = [
    {name: "Bob", age: 30 },
    {name: "Mary", age: 31},
    {name: "Sue", age: 28},
    {name: "George", age: 38}
];

// const peopleOver30 = people.filter( (person) => {
//     if (person.age >= 30) {
//         return true
//     } else {
//         return false
//     }
// })
const peopleOver30 = people.filter( (person) => person.age >= 30);
console.log(peopleOver30);