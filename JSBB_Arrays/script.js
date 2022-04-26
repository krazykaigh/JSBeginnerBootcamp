// Practice
var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros'];


// Challenge
// add a value to the end of the array
// turn 'Giants" into a different team
// access the 'Dodgers' value and save it to variable myFavoriteTeam
// access the length of the array

// Possible solution
console.log("The array baseballTeams consists of " + baseballTeams);
console.log("The current length of the array baseballTeams = " + baseballTeams.length);

console.log("\nThe \'Nationals\' is now being appended to the end of the baseballTeams array using the push function\n");
baseballTeams.push('Nationals');
// baseballTeams[baseballTeams.indexOf(1)] = 'Bluejays';
baseballTeams[1] = 'Blue Jays';
var myFavoriteTeam = baseballTeams[0];

console.log("\nThe array baseballTeams consists of " + baseballTeams);
console.log("The new length of the array baseballTeams = " + baseballTeams.length);
console.log("The variable myFavoriteTeam = " + myFavoriteTeam);
