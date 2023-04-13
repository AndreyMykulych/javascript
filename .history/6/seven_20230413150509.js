let getDayInfo = () => {
    today = new Date()
    let options = { weekday: 'long', day: 'numeric' , month: "long ", year: "numeric"}
    today.toLocaleString('uk-UA',options)
    return console.log(today)
}

console.log(getDayInfo())