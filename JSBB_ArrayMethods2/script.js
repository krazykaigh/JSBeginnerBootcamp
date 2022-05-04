// array methods review
// push() pop() shift() unshift()

// practice
var bigDog = ['Golden Retriever','St. Bernard', 'German Shepherd', 'Bernese Mountain Dog'];

var lilDog = ['terrier', 'weiner dog', 'corgie', 'miniature pinscher'];

var allDogs = bigDog.concat(lilDog);

var cats = ['alley cat', 'fraidy cat', 'scaredy cat'];

var allCatsDogs = cats.concat(lilDog, bigDog);

console.log('The bigDog array consists of the following: ' + bigDog); 
console.log('The lilDog array consists of the following: ' + lilDog); 
console.log('The allDogs array consists of the following: ' + allDogs);

console.log('The allCatsDogs array consists of the following: ' + allCatsDogs);

console.log("\nThe current length of the array bigDog = " + bigDog.length);
console.log("\nThe current length of the array lilDog = " + lilDog.length);
console.log("\nThe current length of the array allDog = " + allDogs.length);
console.log("\nThe current length of the array allCatsDogs = " + allCatsDogs.length);

var reverseCatsDogs = allCatsDogs.reverse();
console.log('The allCatsDogs array was just reveresed');
console.log('The allCatsDogs array consists of the following: ' + allCatsDogs);

// SLICE challenge
// REMEMBER THIS ARRAYS START THE COUNT FROM ZERO 0

console.log('\n\nUsing slice method to return the 3rd - 6th element From the front of the allCatsDogs array') ;
var partialSlice = allCatsDogs.slice(3, 7);
console.log('The partialSlice array now consists of the following: ' + partialSlice);
console.log("The new length of the array partialSlice = " + partialSlice.length);

console.log('\nUsing slece method to return the -2nd through the -4th element from the the end of the allCatsDogs array') ;
var partialSlice = allCatsDogs.slice(-4, -2);
console.log('The partialSlice array now consists of the following: ' + partialSlice);

console.log("The new length of the array partialSlice = " + partialSlice.length);

// Sice from one a point to an end

console.log('\n\nUsing slice method to return all elements from the 4th element from the front of the allDogs array to the end') ;
var partialSlice = allDogs.slice(4);
console.log('The partialSlice array now consists of the following: ' + partialSlice);
console.log("The new length of the array partialSlice = " + partialSlice.length);

console.log('\nUsing slece method to return all elements from the -4th element from the the end of the allCatsDogs array to the first element') ;
var partialSlice = allCatsDogs.slice(6, -4);
console.log('The partialSlice array now consists of the following: ' + partialSlice);

console.log("The new length of the array partialSlice = " + partialSlice.length);