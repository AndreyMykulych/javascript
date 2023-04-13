let getDayInfo = () => {
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()+1;
    let day = today.getUTCDay();
     let dayMonth = today.getDate()
    return (` Сьогодні ${days[day]} ${dayMonth} ${month} місяця ${year} року`)
}

console.log(getDayInfo())