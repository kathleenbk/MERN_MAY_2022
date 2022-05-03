const myBook = {
    title: "my cool JS notes",
    pages: 9001,
    author: "Steven King",
    publishYear: 2022
}

// creating a class - blueprint to instantiate objects
class Book{
    constructor(title, pages, author, publishYear){
        this.bookTitle = title;
        this.pages = pages;
        this.author = author;
        this.publishYear = publishYear || 2022;
    }
}

const unicornBook = new Book("Designs patterns", 123, "Bob", 1998);
const coolvarname = new Book("Book book book", 9000, "Dakoda");

// const bookInfo = {
//     title: "hi",
//     pages: 123,
//     author: "John"
// }

// const newBooky = new Book(bookInfo.title, bookInfo.pages, bookInfo.author);
// console.log(unicornBook);
// console.log(coolvarname);
// console.log(unicornBook.bookTitle);
// console.log(unicornBook.publishYear);

class Vehicle{
    constructor(name, color, hp, manufacturer) {
        // attributes -> characteristics - what the class HAS
        // console.log(this);
        this.name = name;
        this.color = color;
        this.hp = hp;
        this.manufacturer = manufacturer;
        this.miles = 0; 
    }

    // methods - ACTIONS what a class can DO
    drive() {
        this.miles += 10;
        console.log(`${this.name} has driven ${this.miles}`);
        // console.log(this.name + " has driven " + this.miles);
        return this;
    }

    honk(otherCar) {
        console.log("HOOOOONK!!!!! BWEEEEEEEP");
        console.log(`${this.name} honks at ${otherCar.name}`);
    }
}

// INHERITANCE -------------------
// passing down the attributes and methods of the parent

class Tesla extends Vehicle{
    constructor(name, color, hp, autopilot) {
        super(name, color, hp, "Tesla")
        this.autopilot = autopilot || false;
    }

    drive() {
        this.miles += 40;
        console.log(`${this.name} has driven ${this.miles}!!!!`);
        // console.log(this.name + " has driven " + this.miles);
        return this;
    }

    superDrive() {
        super.drive();
    }
}

const sparky = new Tesla("Sparky", "black", 200, true);
console.log(sparky);
sparky.drive().drive();

console.log('---- \n');


const rusty = new Vehicle("Rusty", "blue", 100, "Honda");
// console.log(rusty);
rusty.drive().drive().drive();
// rusty.drive();
// rusty.drive();
// rusty.drive();
// rusty.drive();
console.log(rusty);
// OBJECTS ARE PASS BY REFERENCE

sparky.honk(rusty);
sparky.superDrive();

console.log(sparky);