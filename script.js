
function calculate(operator) {

    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;

    const num1 = Number(input1);
    const num2 = Number(input2);

    const resultElement = document.getElementById("result");
    const messageElement = document.getElementById("message");

    if (input1 === "" || input2 === "") {
        alert("Please enter both numbers!");
        return;
    }

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {

        if (num2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }

        result = num1 / num2;
    }
    else if (operator === "%") {
        result = num1 % num2;
    }

    resultElement.textContent = "Result: " + result;

    if (result < 0) {
        messageElement.textContent = "Warning: Negative result!";
    }
    else {
        messageElement.textContent = "Calculation successful!";
    }
}

function clearCalculator() {

    document.getElementById("num1").value = "";

    document.getElementById("num2").value = "";

    document.getElementById("result").textContent = "Result: 0";

    document.getElementById("message").textContent = "";
}
