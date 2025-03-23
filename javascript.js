// Create functions: add, subtract, multiply, divide

let add = (param1, param2) => param1 + param2;
let subtract = (param1, param2) => param1 - param2;
let multiply = (param1, param2) => param1 * param2;
let divide = (param1, param2) => param1 / param2;

// Create three variables: a number, an operator, and another number. For example, 3 + 5. 

let param1;
let param2;
let operator;

// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

let operate = (param1, param2, operator) => {
    if (operator === '+') {
       return add (param1, param2);
    } else if (operator === '-') {
        return subtract (param1, param2);
    } else if (operator === '*') {
        return multiply (param1, param2);
    } else if (operator === '/') {
        return divide (param1, param2);
    } else {
        return "Invalid operator";
    }
}


