// Practice

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log("The colors array = " + colors);

// challenge
// build another array with 3 unique colors from colors array and add them together

var moreColors = ['turquoise', 'black', 'chocolate brown'];
console.log("\nThe moreColors array = " + moreColors);

//Either way works because these are all strings
var allColors = colors.concat(moreColors);
//var allColors = colors + moreColors;

console.log("\nThe allColors array = " + allColors);

var moreNewColors = ['silver', 'gray', 'sky blue', 'mauve']

var moreAllColors = moreNewColors.concat(moreColors, colors);
console.log("\nThe allColors array = " + moreAllColors);

var allColorsReversed = allColors.reverse();
console.log("\nThe allColorsReversed array = " + allColorsReversed);

var moreAllColorsSorted = moreAllColors.sort();
console.log("\nThe moreAllColorsSorted array = " + moreAllColorsSorted);

var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];
console.log("\nThe weather array = " + weather);

// Challenge SLICE
// create var winter and fill with the winter values
// create var summer and fill with the summer values

var winter = weather.slice(0,5);
console.log("\nThe winter array = " + winter);

var summer = weather.slice(5);
console.log("\nThe summer array = " + summer);

// Challenge Reverse Slice
var winterReverse = weather.slice(0,-4);
console.log("\nThe winter array = " + winter);

var summerReverse = weather.slice(-3,-1);
console.log("\nThe summer array = " + summer);




