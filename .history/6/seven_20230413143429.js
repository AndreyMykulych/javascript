let getDayInfo = () => {
    let today = new Date()
    return today.toLocaleDateString
}

console.log(getDayInfo())