let userNumber = Number(prompt("Введіть число більше 0"));
let onePercentPrice = userNumber / 100;
let smallPrice = userNumber - (onePercentPrice * 3);
let mediumPrice = userNumber -(onePercentPrice *5)
if (userNumber <=100){
        console.log(`Ціна зі знижкою 3% = ${smallPrice}`)
}
else if (userNumber <= 3000) {
    console.log(`Ціна зі знижкою 5% = ${mediumPrice}`)
 }
console.log('Helelo')