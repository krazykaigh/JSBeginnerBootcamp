/*jshint esversion: 8 */

// review function scope
// scope determined by where variable is defined
// global and local
// scope chain
// 'use strict' mode
/* clear();
function roadTrip() {
    var gallons = 12;
    var mpg = 34;
    return gallons * mpg;
}

console.log('Road Trip = ' + roadTrip()); */


var gallons = 12;
var mpg = 34;

function roadTrip() {
    return gallons * mpg;
}

console.log('Road Trip = ' + roadTrip());


(function() {
    var food = 'pizza';
    console.log(food);
}());
// challenge
// build a nested function
// child scope => parent => global scope'
// run the results of the child slope

// Global scope
/* var height = 10;

 function volumeheight(height) {
    var length = 4;
    return length * height;
    function volumeLength(length){
        var width = 6;
        return width * length;
    }


 }

 console.log('The volume of a box w=6, l=4, and h=10 equals ' + volumeLength(length)); */

 var height = 12;

 function volume() {
    // parent scope
    var width = 21;
    var length = 10;
    var volumeOfObject = function () {
        // child or local scope
        return length * width * height;
    }
    return volumeOfObject();
 }

 console.log('The volume of an object with length = 10, width = 21, and height = 12 equals ' + volume());