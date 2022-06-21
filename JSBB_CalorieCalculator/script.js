/*jshint esversion: 8 */

function inputCaloriesByDay(day) {
    var calories = 0;
    // Use if/else
    if (day === 'Monday'){
        calories = 3500;
    }   else if (day === 'Tuesday'){
        calories = 1750;
    }   else if (day === 'Wednesday'){
        calories = 2000;
    }   else if (day === 'Thursday'){
        calories = 2400;
    }   else if (day === 'Friday'){
        calories = 3700;
    }   else if (day === 'Saturday'){
        calories = 1450;
    }   else if (day === 'Sunday'){
        calories = 1225;
    }
      /*  */    console.log('Calories \\Typeof = ' + calories, typeof calories);   
    return (calories);
}
/* // Tests for inputCaloriesByDay function
console.log(inputCaloriesByDay("Tuesday"));
console.log(inputCaloriesByDay("Monday"));
console.log(inputCaloriesByDay("Thuyursday"));
console.log(inputCaloriesByDay("Friday"));
console.log(inputCaloriesByDay("Saturday"));
 */

/* function getTotalCalories(){
    var totalCalories = 0;
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    totalCalories = totalCalories + weekdays.forEach(inputCaloriesByDay);
    console.log('TotalCalories \\Typeof = ' + totalCalories, typeof totalCalories);
    return totalCalories;

} */



function getTotalCalories() {
    return inputCaloriesByDay('Monday') +
    inputCaloriesByDay('Tuesday') +
    inputCaloriesByDay('Wednesday') +
    inputCaloriesByDay('Thursday') +
    inputCaloriesByDay('Friday') +
    inputCaloriesByDay('Saturday') + 
    inputCaloriesByDay('Sunday');
  }


function getIdealCalories() {
    var idealDailyCalories = 2225;
    return idealDailyCalories * 7;
}


/* function calculateHealthPlan() {
    var messageCalories = '';
    var actualCalories, idealCalories = 0;
    actualCalories = getTotalcalories();
    idealCalories = getIdealCalories();
    if (actualCalories === idealCalories){
        messageCalories = 'You ate just the right amount of food';
    }   else if (actualCalories > idealCalories){
        messageCalories = 'Time to head to the gym!';
    }   else if (actualCalories < idealCalories){
        messageCalories = 'Time for seconds';
    }   return messageCalories;

} */

function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    return 'You ate just the right amount!';
  }
  if (actualCalories > idealCalories) {
    return 'Time to head to the gym!';
  } else {
    return 'Time for seconds!';
  }
}
/*  */
console.log('The total calories you consumed this week are: ' + getTotalCalories());

console.log('The ideal amount of calories you should consume are ' + getIdealCalories());

console.log(calculateHealthPlan());
