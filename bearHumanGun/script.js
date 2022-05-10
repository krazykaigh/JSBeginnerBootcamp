/*jshint esversion: 8 */

// 1. Get the user's choice.
console.log('Please choose your power: ');
var choice = input('\n1. Bear\n2. Human\n3. Gun: \(1 - 3\): ' );
var choiceName;
switch(choice) {
    case "1":
        choiceName = "Bear";
        break;
    case "2":
        choiceName = "Human";
        break;
    case "3":
        choiceName = "Gun";
        break;
}

// 2. Get the computer's choice.
var compChoice =  Math.floor(Math.random() *3 ) + 1;
var compChoiceName;
switch(compChoice) {
    case "1":
        compChoiceName = "Bear";
        break;
    case "2":
        compChoiceName = "Human";
        break;
    case "3":
        compChoiceName = "Gun";
        break;
}
var BGH = () => (choice, compChoice) {
if (choice == compChoice) {
    return 'Tie! You both picked: ' + choiceName;
} else if ((choice == 1) && (compChoice == 2)) {
    return 'You WIN!!! Your ' + choiceName + ' just killed the computer\'s ' + compChoiceName + '.';
} else if ((choice == 1) && (compChoice == 3)) {
    return 'You LOSE... You were shot and killed by the computer\'s ' + compChoiceName + '.';
} else if ((choice == 2) && ((compChoice < choice) || (compChoice > choice))) {
    return 'You LOSE! The computer\'s ' + compChoice + ' beat your' + choiceName;
} else if ((choice == 3) && (compChoice < choice )){
    return 'You WIN Gun Lover!!! You just killed a ' + choiceName + '.';
    }
};


// 3. Compare the two choices and determine a winner.

// 4. Start the program and display the results. 


