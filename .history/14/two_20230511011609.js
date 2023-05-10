window.onload = () => {
    axios
        .get('https://swapi.dev/api/planets')
        .then((response) => {
            console.log(response.data)
        })
}