const dollarCourse = 26;
const dollars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let i = 0; i < dollars.length; i++){
    const amountDollars = dollars[i];
    const amountHryvnia = amountDollars * dollarCourse;
    console.log(`${amountDollars} доларів коштують ${amountHryvnia} гривень`)
}