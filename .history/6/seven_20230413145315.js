let getDayInfo = () => {
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()+1;
    let day = day[today.getUTCDay()];
     
    return {year,month,day}
}

console.log(getDayInfo())