// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length built-in method will return number of values in the string, including the space.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the 4th index value in this string is o, thanks to zero indexing causing it to "count up" from the first balue being 0

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Each string is a single value in this array. With the index value of 1 being used, and due to zero indexing, value 1 in this array is the second value, Ruby. I don't know why I thought the quotes would return as well.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: 2
// b) Verify and explain: I DID notice .toUpperCase would have issues since the array is two values, not a string itself. This causes an error. I was not sure and guessed it might return an index count, like the earlier .length usage.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: typeof will return the data type of the array's values. but using .length in this instance will turn dataTypes into a number, the count of dataTypes values [4]. Thus typeof will return "number"
