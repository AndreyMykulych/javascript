let getDayInfo = () => {
    today = new Date()
    let options = { weekday: 'long', day: 'numeric' , month: "long ", year: "numeric"}
    today.toLocaleDateString('uk-UA',options)
    return today
}

console.log(getDayInfo())