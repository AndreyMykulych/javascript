window.onload = () => {
    let planets =[]
    axios
        .get('https://swapi.dev/api/planets')
        .then((response) => {
            console.log(response.data.results)
            for (let i = 0; i < 10; i++) {
                planets.push(response.data[i])
            }
            console.log(planets)
        })
}