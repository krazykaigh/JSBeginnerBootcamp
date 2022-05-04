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


