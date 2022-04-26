// array methods review
// push() pop() shift() unshift()

// practice
var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];
console.log('The shoppingList array consists of the following: ' + shoppingList); 

console.log("The current length of the array shoppingList = " + shoppingList.length);

// challenge
// insert 'crackers' at the front of the array and 'grapes' at the end of the array


console.log('Using unshift method to add an element to the front of the shoppingList array') ;
shoppingList.unshift('crakers');
console.log('The shoppingList array now consists of the following: ' + shoppingList);

console.log('\nUsing push method to add an element to the end of the shoppingList array') ;
shoppingList.push('grapes');
console.log('The shoppingList array now consists of the following: ' + shoppingList);

console.log("The new length of the array shoppingList = " + shoppingList.length);

console.log('Using unshift method to add mulitple elements to the front of the shoppingList array') ;
shoppingList.unshift('pickes', 'butter', 'green tea');
console.log('The shoppingList array now consists of the following: ' + shoppingList);

console.log('\nUsing push method to add multiple elements to the end of the shoppingList array') ;
shoppingList.push('lemonade', 'orange juice', 'chocolate chip cookies');
console.log('The shoppingList array now consists of the following: ' + shoppingList);

console.log("The new length of the array shoppingList = " + shoppingList.length);