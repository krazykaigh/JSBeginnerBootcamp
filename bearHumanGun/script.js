/*jshint esversion: 8 */

// 1. Get the user's choice.
console.log('Please choose your power: ');
var choice = prompt('\n1. Bear\n2. Human\n3. Gun' );
var choiceName;
console.log('You picked number :' + choice);2
switch(choice) {
    case "1":
        choiceName = "Bear";
        console.log('\nYou chose a ' + choiceName);
        break;
    case "2":
        choiceName = "Human";
        console.log('\nYou chose a ' + choiceName);
        break;
    case "3":
        choiceName = "Gun";
        console.log('\nYou chose a ' + choiceName);
        break;
}

// 2. Get the computer's choice.
var compChoice =  Math.floor(Math.random() *3 ) + 1;
console.log('The computer picked number: ' + compChoice);
var compChoiceName;
switch(compChoice) {
    case "1":
        compChoiceName = "Bear";
        console.log('The computer chose a ' + compChoiceName);
        break;
    case "2":
        compChoiceName = "Human";
        console.log('The computer chose a ' + compChoiceName);
        break;
    case "3":
        compChoiceName = "Gun";
        console.log('The computer chose a ' + compChoiceName);
        break;
}
var BGH = function(choice, compChoice) {
if (choice == compChoice) {
    return 'Tie! You both picked: ' + choiceName;
} else if ((choice == 1) && (compChoice == 2)) {
    return 'You WIN!!! Your ' + choiceName + ' just killed the computer\'s ' + compChoiceName + '.';
} else if ((choice == 1) && (compChoice == 3)) {
    return 'You LOSE... You were shot and killed by the computer\'s ' + compChoiceName + '.';
} else if ((choice == 2) && ((compChoice < choice) || (compChoice > choice))) {
    return 'You LOSE! The computer\'s ' + compChoiceName + ' beat your' + choiceName;
} else if ((choice == 3) && (compChoice < choice )){
    return 'You WIN Gun Lover!!! You just killed a ' + choiceName + '.';
}
};


// 3. Compare the two choices and determine a winner.

// 4l. Start the program and display the results. 
console.log(BGH(choice, compChoice));

