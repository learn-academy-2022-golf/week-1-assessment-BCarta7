// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
    // create function named q1
    // include parameter named temp
    // create conditional within function checking if argument is above, at, or below boiling point, or not a number
    // return string with string interopolation correctly stating if argument is above, at, or below boiling point, or not a number.

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const q1 = (temp) => {
    if (temp === 212) {
        return `${temp} is at boiling point.`
    } else if (temp > 212) {
        return `${temp} is above boiling point.`
    } else if (temp < 212) {
        return `${temp} is below boiling point.`
    } else {
        return `${temp} is not an accepted number.`
    }
}
console.log(q1(temp1))  // output: "42 is below boiling point"
console.log(q1(temp2))  // output: "350 is above boiling point."
console.log(q1(temp3))  // output: "212 is at boiling point."
console.log(q1("fish"))  // output: "fish is not an accepted       number."

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
    // create function named q2
    // include parameters using two variables
    // within function, create new variable Merged consisting of a combination of var1 and var2 via .concat accessor
    // return total number of elements in new variable's array using .length built-in method
    // invoking function should return total combined number of values from given arrays, or any other arrays used.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const q2 = (var1, var2) => {
    let Merged = var1.concat(var2)
    return Merged.length
}
console.log(q2(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))  // output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
    // create function named q3
    // add parameter var1
    // within the function, return the the output of var1 and built-in methods split - to turn string into array - reverse - to flip order of values in array - and join - to return array to a string
    // invoking q3 should return a reversed version of given string variable, or any other string argument.

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"

const q3 = (var1) => {
    return var1.split("").reverse().join("")
}
console.log(q3(currentCohort)) // output: 2202 floG

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
    // create function q4
    // add parameters array1, var1
    // within function, create for-loop using .length built-in method of array1 as maximum
    // create new variable, var2, equal to array1.lastIndexOf(var1) - to find var1's index in given array using built-in method.
    // return var2 should show index of final instance of given variables, or any argument used found in given array.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const q4 = (array1, var1) => {
    for (let i = 0; i < array1.length; i++) {
        let var2 = array1.lastIndexOf(var1)
        return var2
    }
    
}
console.log(q4(myNumbers, givenValue1)) // output: 7
console.log(q4(myNumbers, givenValue2)) // output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
    // create function q5
    // add parameter var1
    // within function, create variable var2 = var1 sorted then reversed with built-in methods. 
    // return var2
    // when invoked, function should display given variables, or any numbers array, in descending order of values.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const q5 = (var1) => {
    let var2 = var1.sort((a, b) => a - b).reverse()
    return var2
}
console.log(q5(sanDiegoSummerTemperatures)) // output: [82, 80, 79, 77, 76, 73, 72]
console.log(q5(sanDiegoWinterTemperatures)) // output: [68, 67, 66, 66, 62, 59, 59]
// I had to reference syllabus examples and outside resources to make this idea work, did not initially know how to sort an array of numbers.