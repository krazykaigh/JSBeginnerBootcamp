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
        console.log('Calories \\Typeof = ' + calories, typeof calories);   
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

console.log(getTotalCalories());

function getIdealCalories() {
    
}