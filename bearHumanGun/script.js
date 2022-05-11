/*jshint esversion: 8 */

// 1. Get the user's choice.
console.log('Please choose your power: ');
var choice = prompt('\n1. Bear\n2. Human\n3. Gun' );
var choiceName = 'CHANGE ME';
console.log('You picked number :' + choice);2
if (choice == 1) {
    choiceName = "Bear";
} else if (choice == 2) {
    choiceName = "Human";    
} else if (choice == 3) {
    choiceName = "Gun";
}

// 2. Get the computer's choice.
var compChoice =  Math.floor(Math.random() *3 ) + 1;
var compChoiceName = '';
console.log('The computer picked number: ' + compChoice);

if (compChoice == 1) {
    compChoiceName = "Bear";
} else if (compChoice == 2) {
    compChoiceName = "Human";    
} else if (compChoice == 3) {
    compChoiceName = "Gun";
}


// 3. Compare the two choices and determine a winner.

var BGH = function(choice, choiceName, compChoice, compChoiceName) {
    if (choice == compChoice) {
        return 'Tie! You both picked: ' + choiceName;
    } else if ((choice == 1) && (compChoice == 2)) {
        return 'You WIN!!! Your ' + choiceName + ' just killed the computer\'s ' + compChoiceName + '.';
    } else if ((choice == 1) && (compChoice == 3)) {
        return 'You LOSE... You were shot and killed by the computer\'s ' + compChoiceName + '.';
    } else if ((choice == 2) && ((compChoice < choice) || (compChoice > choice))) {
        return 'You LOSE! The computer\'s ' + compChoiceName + ' beat your ' + choiceName;
    } else if ((choice == 3) && (compChoice < choice )){
        return 'You WIN Gun Lover!!! You just killed a ' + compChoiceName + '.';
    }
};
// 4. Start the program and display the results. 
console.log(BGH(choice, choiceName, compChoice, compChoiceName));

