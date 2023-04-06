let userMoney = 10000;
let bank = [
    {
        currency: 'usa',
        price:38
    },
    {
        currency: 'eur',
        price:39
    },
    {
        currency: 'zlt',
        price:10
    }
]



let userCurrencyFn = (bank, userMoney) => {
    let userCurrencyArr = []
    for (i = 0; i < bank.length; i++){
        let userCurrencyValue = Math.floor(userMoney / bank[i].price);
        userCurrencyArr.push(`Ваші заощадженя в ${bank[i].currency} = ${userCurrencyValue}`)
    }
    return userCurrencyArr
}
console.log(userCurrencyFn(bank,userMoney))