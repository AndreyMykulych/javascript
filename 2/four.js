let userNumber = Number(prompt("Введіть число більше 100"));

let onePercentPrice = userNumber / 100;

let smallPrice = userNumber - (onePercentPrice * 3);
let mediumPrice = userNumber - (onePercentPrice * 5);
let highPrice = userNumber - (onePercentPrice * 7);

if (userNumber >=100){
        console.log(`Ціна зі знижкою 3% = ${smallPrice}`)
}
else if (userNumber >= 3000) {
    console.log(`Ціна зі знижкою 5% = ${mediumPrice}`)
}
else if (userNumber >= 10000) {
    console.log(`Ціна зі знижкою 7% = ${highPrice}`)
}
else {
    console.log(`У вас немає знижки,до сплати ${userNumber}`)
 }
