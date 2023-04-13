let getDayInfo = () => {
    today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()+1;
    let day = today.getDay();

    return {year,month,day}
}

console.log(getDayInfo())