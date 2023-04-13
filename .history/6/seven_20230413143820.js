let getDayInfo = () => {
    today = new Date()
    let year= today.getFullYear()
    return console.log(`${year}`)
}

console.log(getDayInfo())