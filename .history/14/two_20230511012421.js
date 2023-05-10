window.onload = () => {
    let planets = []
    let container = document.querySelector('.container')
    axios
        .get('https://swapi.dev/api/planets')
        .then((response) => {
            console.log(response.data)
            for (let i = 0; i < response.data.results.length; i++) {
                planets.push(response.data.results[i])
            }
            console.log(planets)
            for (let j = 0; j < planets.length; j++) {
                let card = document.createElement('div')
                card.classList.add('card')
                card.classList.add('mt-4')
                card.classList.add('mb-4')
                card.style.width = '18rem'
                
                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')
                

                let cardName = document.createElement('div')
                let diameter = document.createElement('div')
                let population = document.createElement('div')
                let website = document.createElement('div')
                
                cardName.classList.add('card-title')
                diameter.classList.add('card-text')
                population.classList.add('card-text')
                website.classList.add('card-text')
               
           
                cardName.innerHTML = `${planets[j].name}`
                diameter.innerHTML = `${planets[j].diameter}`
                population.innerHTML = `Population =${planets[j].population}`
                website.innerHTML = `${planets[j].website}`

                cardBody.appendChild(cardName)
                cardBody.appendChild(diameter)
                cardBody.appendChild(population)
                cardBody.appendChild(website)

                card.appendChild(cardBody)
                container.appendChild(card)
            }
        })
        .catch((error) => {
            console.log(error)
        })
   
        
}