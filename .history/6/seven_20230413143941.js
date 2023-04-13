let getDayInfo = () => {
    today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth();
     console.log(`${year} +${month}`)
}

console.log(getDayInfo())