/* ****Maps and Sets Exercise****

**Quick Question #1**

What does the following code return? */

new Set([1,1,2,2,3,4]) // returns Set(4) {1, 2, 3, 4}


/* **Quick Question #2**

What does the following code return? */

//[...new Set("referee")].join("") // returns "ref"


/* **Quick Questions #3**

What does the Map ***m*** look like after running the following code?*/

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); /* returns Map(2) {Array(3) => true, Array(3) => false}
[[Entries]]
0 : {Array(3) => true}
1 : {Array(3) => false}
size : 2
[[Prototype]] : Map*/

/* **hasDuplicate**

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate */

const hasDuplicate = arr => new Set(arr).size !== arr.length;

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


/* **vowelCount**

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values
are the count of the vowels in the string.*/

function vowelCount(str){
    const vowels = 'aeiouAEIOU';
    const m = new Map();

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (vowels.includes(char)) {
            !m.has(char) ? m.set(char, 1) : m.set(char, m.get(char) + 1);
        }
    }

    for (const [key, value] of m.entries()) {
        console.log(`${key} = ${value}`);
    }
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }