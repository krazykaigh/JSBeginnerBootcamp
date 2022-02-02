/* jshint esversion: 8 */

// Chanllenge
// build a person with object literal notation
// use three properties and value pairs  consisting of a string, number, and a boolean value

// possible solution

var thisPerson = {
    name : 'Timmy',
    age : 4,
    employed: false
};
console.log('This person has these traits: \n' 
    + 'name : ' + thisPerson.name + '\n'
    + 'age : ' + thisPerson.age  + '\n'
    + 'employed : ' + thisPerson.employed + '\n');
console.log(thisPerson);

// Chanllenge
// build an object with dot notation
// use dot notation to add four properties value pairs
// possible solution

const autoType = {};
autoType.wheels = 2;
autoType.engine = 'Electric';
autoType.seats = 'Inline bench for 2';
autoType.autonomous = false;

console.log('My vehicle  has these traits \n' 
+ 'autonomous : ' + autoType.autonomous + '\n'
+ 'wheels : ' + autoType.wheels + '\n'
+ 'engine : ' + autoType.engine + '\n'
+ 'seats : ' + autoType.seats + '\n');
console.log(autoType);

// Chanllenge
// build an object with bracket notation
// use dot notation to add four properties value pairs
// possible solution

var cup = {};
cup['size in oz.'] = 16;
cup['material'] = 'ceramic';
cup['handle'] = true;
cup['maker'] = 'Yeti';

console.log('This cup  has these traits \n' 
+ 'size in oz. : ' + cup['size in oz.'] + '\n'
+ 'material : ' + cup['material'] + '\n'
+ 'handle : ' + cup['handle'] + '\n'
+ 'maker : ' + cup['maker'] + '\n');
console.log(cup);

// Challenge
// build a house object 
// add 4 propert values with dot notation with at least 3 properties with bracket notation
//
// possible solution

var myHouse = {};
myHouse.sqFt =  2370;
myHouse.bedrooms = 4;
myHouse.bathrooms = 3.5;
myHouse.acres = '2.7 acres';
myHouse['spiral staircase'] = true;
myHouse['chef\'s kitchen'] = true;
myHouse['deck material'] = 'treated composite wood';
console.log(myHouse);

// CONSTRUCTOR CAR FUNCTION

function Home(rooms, apartment, color, swimmingPool, state , city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
}

var ranch = new Home(4, false, 'Light Gray', true, "MD", "Laurel");
var condo = new Home(2, true, "white", false, "MD", "Columbia");
var castle = new Home(10, false, "Stone", true, "VA", "Chantilly");
castle.flooring = 'Marble';
castle.poolNum = 4;
castle.kitchens = 3;
castle.dungeon = true;

console.log(ranch);
console.log(condo);
console.log(castle);
