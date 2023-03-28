let userNumber = Number(prompt("Введіть число більше 0"));
let onePercentPrice = userNumber / 100;
let smallPrice = userNumber - (onePercentPrice * 3);
switch (userNumber) {
    case userNumber <= 100:
        console.log(`Ціна зі знижкою 3% = ${smallPrice}`)
        break
 }
console.log('Helelo')