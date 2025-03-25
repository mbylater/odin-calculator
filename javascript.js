document.addEventListener("DOMContentLoaded", () => {
    // Arithmetic functions
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => b === 0 ? 'Nope 💩' : a / b; // Division-by-zero check

    // Global variables for operands and operator
    let firstOperand = null;
    let secondOperand = null;
    let currentOperator = null;
    let displayValue = "0";

    // Reference to the display element
    const displayElement = document.querySelector('.display');

    // Function to perform operation based on the operator
    const operate = (a, b, op) => {
        if (op === '+') return add(a, b);
        if (op === '-') return subtract(a, b);
        if (op === '*') return multiply(a, b);
        if (op === '/') return divide(a, b);
        return "Invalid operator";
    };

    // Event delegation for the keyboard
    document.querySelector('.calculator').addEventListener("click", (event) => {
        // Handle number buttons
        if (event.target.classList.contains('number')) {
            if (displayValue === "0") {
                displayValue = event.target.textContent;
            } else {
                displayValue += event.target.textContent;
            }
            displayElement.textContent = displayValue;

        // Handle operator buttons
        } else if (event.target.classList.contains('operator')) {
            if (displayValue !== "") {
                if (firstOperand !== null && currentOperator !== null) { // Chaining operations
                    secondOperand = Number(displayValue);
                    displayValue = operate(firstOperand, secondOperand, currentOperator).toString();
                    displayElement.textContent = displayValue;
                    firstOperand = Number(displayValue);
                    secondOperand = null;
                } else {
                    firstOperand = Number(displayValue);
                }
                currentOperator = event.target.textContent;
                displayValue = "";
            }

        // Handle "=" button
        } else if (event.target.id === "=") {
            if (firstOperand !== null && displayValue !== "") {
                secondOperand = Number(displayValue);
                const result = operate(firstOperand, secondOperand, currentOperator);
                displayElement.textContent = result;
                displayValue = result.toString();
                firstOperand = null;
                secondOperand = null;
                currentOperator = null;
            }

        // Handle "AC" (clear) button
        } else if (event.target.id === "clear") {
            displayValue = "0";
            firstOperand = null;
            secondOperand = null;
            currentOperator = null;
            displayElement.textContent = displayValue;
        }
    });
});
