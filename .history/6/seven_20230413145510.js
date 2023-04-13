let getDayInfo = () => {
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()+1;
    let day = today.getUTCDay();
     
    return console.log(`${year} + ${month} + ${days[day]})
}

console.log(getDayInfo())