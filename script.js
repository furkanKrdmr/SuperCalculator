let firstValue = parseInt(prompt("what's the first value ?"));
let operator = prompt("what's operator ?");
let secondValue = parseInt(prompt("what's the second value ?"));



switch (operator) {
    case "+":
    console.log(firstValue + secondValue);
    break;

    case "-":
        console.log(firstValue - secondValue);
        break;
    case "*":
        console.log(firstValue * secondValue)
        break;
    case "/":
    console.log(firstValue / secondValue)
    break;
    default:
        console.log("Invalid Operators");
}