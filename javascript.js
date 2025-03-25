// Create functions: add, subtract, multiply, divide
let add = (param1, param2) => param1 + param2;
let subtract = (param1, param2) => param1 - param2;
let multiply = (param1, param2) => param1 * param2;
let divide = (param1, param2) => param1 / param2;

// Create three global variables: a number, an operator, and another number. For example, 3 + 5. 
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

// Establish global variable display as a string
let display = "0";

// Add an event listener to each digit button.
document.querySelector('.keyboard').addEventListener("click", (event) => {
    if (event.target.classList.contains('number')) {
            // If the display shows "0", replace it with the clicked digit
        if (display === "0") {
            display = event.target.textContent;
        // Append the digit to the existing number stored in the variable.
        } else {
            display += event.target.textContent;
        }
        // Update the display with the new value
        const newDisplay = document.querySelector('.display');
        newDisplay.textContent = display; 
    }
});











