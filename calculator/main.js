const readline = require("readline-sync")



// VARIABLES

const numOne = readline.questionInt("Please enter a number: ")
const numTwo = readline.questionInt("Please enter another number: ")
const operation = ["add", "subtract", "multiply", "divide"] 
const answer = readline.keyInSelect(operation, "Please choose what you'd like to do with these numbers: ")
// console.log(answer)



// FUNCTIONS

function add(numOne, numTwo){
    console.log(numOne + numTwo)
}

function sub(numOne, numTwo){
    console.log(numOne - numTwo)
}

function mult(numOne, numTwo){
    console.log(numOne * numTwo)
}

function div(numOne, numTwo){
    console.log(numOne / numTwo)
}



// CALCULATE

if(answer === 0){
    add(numOne, numTwo)
} else if(answer === 1){
    sub(numOne, numTwo)
} else if(answer === 2){
    mult(numOne, numTwo)
} else if(answer === 3){
    div(numOne, numTwo)
}