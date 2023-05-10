window.onload = () => {
    let planets =[]
    axios
        .get('https://swapi.dev/api/planets')
        .then((response) => {
            console.log(response.data)
            for (let i = 0; i < response.data.results.length; i++) {
                planets.push(response.data.results[i])
            }
            console.log(planets)
        })
}