const userNum = parseInt(prompt('Введіть ціле число'))

if (isNaN(userNum) || userNum <= 0) {
    console.log("Ви ввели некоректне число.");
} else {
    let number = 1;
    while (number * number <= userNum && number <= 100) {
        console.log(number);
        number++;
    }
}
