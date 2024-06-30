// 🌟 Exercise 1 : Location

// Instructions

// Analyze the code below. What will be the output?

// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(
//   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// );

//my answer: I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207

//right answer: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//------------------------------------------------//

// 🌟 Exercise 2: Display Student Info

// Instructions

// function displayStudentInfo(objUser) {
//   const { first, last } = objUser;
//   return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:

//output : 'Your full name is Elie Schoppik'

//------------------------------------------------//

// 🌟 Exercise 3: User & Id

// Instructions

//Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// FYI : The number is their ID number.

// const newArray = Object.entries(users);

// console.log(newArray);

//2.  Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// const multiplingByTwo = newArray.map(([key, value]) => [key, value * 2]);

// console.log(multiplingByTwo);

//------------------------------------------------//

//🌟 Exercise 4 : Person Class

// Instructions

// Analyze the code below. What will be the output?

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("John");
// console.log(typeof member);

//my answer: value string John
//right answer: object

//------------------------------------------------//

// 🌟 Exercise 5 : Dog Class

// Instructions

// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Analyze the options below. Which constructor will successfully extend the Dog class?

// 1 -NO
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// }

// 2-YES!!!
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }

// 3 -NO
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// }

// 4 -NO
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// }

//------------------------------------------------//

// 🌟 Exercise 6 : Challenges

//1. Evaluate these (ie True or False)

// [2] === [2]
// {} === {}

//true

// 2. What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

//my answer:
//object 1 = 4
// object 2 = 4
// object 3 = 4
// object 4 = 5

//right answer from console:

// VM448:7 4
// VM448:8 4
// VM448:9 5

//3. Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  say() {
    console.log(
      `Hey there! This is my pet ${this.name}, the most beautiful ${this.color} ${this.type} you've ever seen.`
    );
  }
}

let dog = new Animal("Bobby", "Dog", "Grey");
dog.say();

//4. Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  sound(sound) {
    console.log(
      `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`
    );
  }
}

//5. Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

let farmerCow = new Mamal("Bobby", "dog", "grey");
farmerCow.sound("Ruff Ruff");
