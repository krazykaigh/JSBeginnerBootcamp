// Practice
var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros'];


// Challenge
// add a value to the end of the array
// turn 'Giants" into a different team
// access the 'Dodgers' value and save it to variable myFavoriteTeam
// access the length of the array

baseballTeams.push('Nationals');
baseballTeams[baseballTeams.indexOf(1)] = 'Bluejays';
var myFavoriteTeam = baseballTeams.indexOf(0);


console.log("The array baseballTeams consists of " + baseballTeams);
console.log("The length of the array baseballTeams = " + baseballTeams.length());
console.log("The variable myFavoriteTeam = " + myFavoriteTeam);