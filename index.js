/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
    this.name = name
    this.age = age
    this.stomach = []
}
    Person.prototype.eat = function(edible){
      if(this.stomach.length < 10){
        this.stomach.push(edible)
      }
    }

    Person.prototype.poop = function(){
        this.stomach = []
    }

    Person.prototype.toString = function(){
        return `${this.name} and ${this.age}`;
    }
    
    // create my object
    const cam = new Person('Cam', 20);
    const spencer = new Person('Spencer', 28);
    /*
    // create what it eat
    spencer.eat('pizza');
    spencer.eat('cake');
    spencer.eat('chicken');
    spencer.eat('sandwich');
    spencer.eat('ice cream');
    */

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car() {
  /*
    
  */
}


/*
  TASK 3
    - Write a Baby constructor sub-classing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
    this.name = name
    this.age = age
    this.favoriteToy = favoriteToy
};

  Baby.prototype = Object.create(Person.prototype)
    Baby.prototype.play = function () {
      return `Playing with ${this.favoriteToy}`;
    }

  const jack = new Baby('Jack', '2', 'Teddy Bear');
  console.log(jack.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Default Binding
    - In non-strict mode 'this' keyword will be by default in global object, but if its on strict mode the keyword will be undefined as it requires a variable.
  2. Implicit Binding
    - It points to the object with methods on which the function is invoked  
  3. Explicit Binding 
    - it tells the JavaScript engine to set it to point to a certain value using call, apply or bind.   - 
  4. New Binding
    - using the new keyword constructs a new object and this keyword point to the newly created object.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}