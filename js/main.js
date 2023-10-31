let firstNumber;
let secondNumber;
let operator;
let reapet;
let chek;
do {
    chek = true;
    do {
        firstNumber = +prompt("Enter first number");
        if (!isNaN(firstNumber)) chek = false;
    } while (chek);
    chek = true;
    do {
        secondNumber = +prompt("Enter second number");
        if (!isNaN(secondNumber)) chek = false;
    } while (chek);
    chek = true;
    do {
        operator = prompt(" add, sub, mult, div");
        if (operator == "add" || operator == "sub" || operator == "mult" || operator == "div") chek = false;
    } while (chek);
    chek = true;
    switch (operator) {
        case "add":
            alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
         break;
        case "sub":
            alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
        case "mult":
            alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
        case "div":
            if (secondNumber == 0) {
                alert("You can't divide by 0");
            } else {
                alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            }
        break;
    }
    reapet = prompt("Reapet ?") == "yes" ? chek = true : chek = false;
} while (chek);