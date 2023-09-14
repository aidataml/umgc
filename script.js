/* Write an ES2015 Version 

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);
// console.log(filterOutOdds(1,2,3,4,5,6,7)) // returns [2,4,6]


/* ## **findMin**

Write a function called findMin that accepts a variable number of arguments and returns the 
smallest argument.

Make sure to do this using the rest and spread operator.*/

function findMin(...args) {
    return Math.min(...args);
}
// console.log(findMin(1,2,0,-1,2,5,6)) // returns -1


/* ## **mergeObjects**

Write a function called ***mergeObjects*** that accepts two objects and returns a new object 
which contains all the keys and values of the first object and second object.*/

function mergeObjects(obj1, obj2){
    let newObj = {...obj1, ...obj2};
    return newObj;
}
// console.log(mergeObjects({a:2,e:3},{i:1,o:4,u:3}))


/* ## **doubleAndReturnArgs**

Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number 
of arguments. The function should return a new array with the original array values and all of 
additional arguments doubled.*/

function doubleAndReturnArgs(arr, ...args) {
    const argsArr = [...args];
    const doubleArgs = argsArr.map(function(val) {
        return val * 2;
    });
    const combined = [...arr, doubleArgs];
    return combined;
}
// console.log(doubleAndReturnArgs([1,2,3,4],5,6))

/* ## **Slice and Dice!**

For this section, write the following functions using rest, spread and refactor these functions 
to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing 
inputs.*/

/** remove a random element in the items array
and return a new array without that item.

function removeRandom(items) {

}*/

const removeRandom = (items) => {
    let indexForRemoval = Math.floor(Math.random() * items.length);
    return [...items.slice(0,indexForRemoval), ...items.slice(indexForRemoval + 1)];
}
// console.log(removeRandom(["a","b","c","d","e","f","g"]));


/** Return a new array with every item in array1 and array2. 

function extend(array1, array2) {

}*/

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}
// console.log(extend(["a","b","c"],["d","e","f","g"]))

/** Return a new object with all the keys and values
from obj and a new key/value pair 

function addKeyVal(obj, key, val) {

}*/

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
// console.log(addKeyVal({a:1,b:2,c:3},{d:4}))


/** Return a new object with a key removed.

function removeKey(obj, key) {

}*/

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}
// console.log(addKeyVal({a:1,b:2,c:3},{c:3}))

/** Combine two objects and return a new object. 

function combine(obj1, obj2) {

}*/

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
// console.log(combine({a:1,b:2,c:3},{d:1,e:2,f:3}))

/** Return a new object with a modified key and value.

function update(obj, key, val) {

}*/

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}