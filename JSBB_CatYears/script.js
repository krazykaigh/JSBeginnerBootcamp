/* jshing esversion: 8 */
/* 
Here's how you convert your age from "human years" to "cat years":

The first two years of a cat's life count as 25 cat years each.

Each year following equates to 4 cat years. 
*/
var myAge = 56;

// earlyYears = Cat's first two years this var's value will change
var earlyYears = 2;
// earlyYears accounts for my age.
var laterYears = myAge - 2;

// This var will keep the my age converted to cat years.
var myAgeInCatYears = null;

// first two cat years are each approximated to equal 25 human years
earlyYears *= 25;

// after the first two years count years by 4s
laterYears *= 4;

// adding the earlyYears with the laterYears gives my age in cat years.
myAgeInCatYears = earlyYears + laterYears;

console.log('If I was a cat, I would be ' + myAgeInCatYears + ' years old!');


