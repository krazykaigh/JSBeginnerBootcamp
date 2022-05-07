/*jshint esversion: 8 */

// 1. Create an array with four different body parts and 
// assign the array to the variable randomBodyParts. 
// Some examples of body parts would be: head, arms, legs, feet, toes, hips.

var randomBodyParts = ['armpit', 'nose', 'mouth', 'leg', 'face', 'back'];

// 2. Create an array with four adjectives and assign the array to the variable randomAdjectives.

var randomAdjectives = ['a stinky', 'a dirty', 'a runny', 'a messy', 'a greasy', 'an ugly'];

// 3a. Create an array with five random words and assign to the array to the variable randomWords.

var randomVerbs = ['feels', 'looks', 'smells', 'looks', 'is dark', 'is slimy'];

// 3b. Create an array with five random words and assign to the array to the variable randomWords.

var randomWords = ['scab', 'hole', 'fart', 'shoe', 'tunnel', 'booger'];

// 4. Use the Math.floor() method and the Math.random() method to choose a random item 
// from your randomBodyParts array and assign it to the variable randomBodyPart. 
// Here is an example of how we might choose a random name from a list of names. 
// If you get stuck you can watch me walk through this in the solution video.

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 6)];

// 5. Use the Math.floor() method and the Math.random() method to choose a random item 
// from your randomAdjectives array and assign it to the variable randomAdjective. 
// Here is an example of how we might choose a random name from a list of names.
var randomVerbWord = Math.floor(Math.random() * 6);
var randomVerb = randomVerbs[randomVerbWord];
var randomAdjective = randomAdjectives[randomVerbWord];

// 6. Use the Math.floor() method and the Math.random() method to choose a random item 
// from your randomWords array and assign it to the variable randomWord. 
// Here is an example of how we might choose a random name from a list of names.

var randomWord = randomWords[Math.floor(Math.random() * 6)];

// 7. Write a console.log statement that displays your randomly generated insult:
// Your BODY PART is like a ADJECTIVE WORD!!!
// Replace  "BODY PART" with randomBodyPart, 
// "ADJECTIVE" with randomAdjective, 
// and  "WORD" with randomWord in the sentence above.

var output  = ('\nYour ' + randomBodyPart + ' ' + randomVerb + ' like ' + randomAdjective + ' ' + randomWord + '!!!');
// 'Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!!!';
document.getElementById("demo").innerHTML =(output);
console.log(output);