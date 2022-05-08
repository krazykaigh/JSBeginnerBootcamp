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

console.log(knockKnock());

// challenge
// turn knockKnock into an ANONYMOUS FUNCTION with a function expression
// call the funtion

var fnKnockKnock = function() {
    return 'Who\'s there?';
};

console.log('fnKnockKnock\n' +  fnKnockKnock);
console.log(fnKnockKnock());

// immediately Invoked Function Expression (IFFE)
// practice

function dogWalker(person, dog) {
    return person + ' is walking a ' + dog;
}

console.log(dogWalker('Paul', 'minpin'));

// dogWalker turned into an IIFE
console.log((function(person, dog) {
    return person + ' is walking a ' + dog;
}('Mike', 'sharpe')));


