let getDayInfo = () => {
    today = new Date()
    let options = { weekday: 'long', day: 'numeric' , month: "long ", year: "numeric"}
   now = today.toLocaleString('uk-UA',options)
    return console.log(now)
}

console.log(getDayInfo())