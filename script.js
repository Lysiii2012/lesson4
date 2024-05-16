let userNumber = prompt("Введіть ціле число:");
let number = parseInt(userNumber);

function whathNum(number) {
    if (number <= 1) {
        return false;
    }
    let divisor = 2;
    while (divisor <= Math.sqrt(number)) {
        if (number % divisor === 0) {
            return false; 
        }
        divisor++;
    }
    return true; 
}

if (isNaN(number)) {
    console.log("Ви ввели не число.");
} else {
    console.log(whathNum(number) ? `${number} - просте число.` : `${number} - не є простим числом.`);
}
