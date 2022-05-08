/*jshint esversion: 8 */

// Review
// function expressions
// anonymous expressions
// IFFEs

// practice
function knockKnock() {
    return 'Who\'s there?';
}

// Challenge
// call the knockKnock function

console.log('1. ' + knockKnock());

// challenge
// turn knockKnock into an ANONYMOUS FUNCTION with a function expression
// call the funtion

var fnKnockKnock = function() {
    return 'Who\'s there?';
};

console.log('2. fnKnockKnock\n' +  fnKnockKnock);
console.log('3. ' + fnKnockKnock());

// immediately Invoked Function Expression (IFFE)
// practice

function dogWalker(person, dog) {
    return person + ' is walking a ' + dog;
}

console.log('4. ' + dogWalker('Paul', 'minpin'));
var person = 'Mark';
var breed = 'Dobbermin';
// dogWalker turned into an IIFE
var iffeDogWalker = (function(person, dog) {
    return person + ' is walking a ' + dog;
}(person, breed));

console.log('5. ' + iffeDogWalker); // compare to 2. calling name without () invokes function

let factory = {
    items: [5, 1, 12],
    double: function(){
        return this.items.map((item, index) => {
            let value = item*2;
            console.log(`${value} is the double of ${this.items[index]}`);
            return value;
        });
    }
};

factory.double();

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3.5;
});

console.log(modifiedArr);



