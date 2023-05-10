planetsCreate(planets)
window.onload = () => {
    let planets = []
    
    let container = document.querySelector('.container')
    let planetsDiv = document.querySelector('.planets')
    
  
        axios
        .get('https://swapi.dev/api/planets')
        .then((response) => {
            console.log(response.data)

            for (let i = 0; i < response.data.results.length; i++) {
                planets.push(response.data.results[i])
            }
            
          let planetsCreate= (planets)=>{ console.log(planets)
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
                let climate = document.createElement('div')
                
                cardName.classList.add('card-title')
                diameter.classList.add('card-text')
                population.classList.add('card-text')
                climate.classList.add('card-text')
               
           
                cardName.innerHTML = `${planets[j].name}`
                diameter.innerHTML = `Diameter ${planets[j].diameter}`
                population.innerHTML = `Population ${planets[j].population}`
                climate.innerHTML = `Climat ${planets[j].climate}`

                cardBody.appendChild(cardName)
                cardBody.appendChild(diameter)
                cardBody.appendChild(population)
                cardBody.appendChild(climate)

                card.appendChild(cardBody)
               planetsDiv.appendChild(card)
    }
          }
            
            let diameterBtn = document.querySelector('.sortDiameter')
            diameterBtn.onclick = () => {
                planets.sort((a, b) => {
                    const diameterA = parseInt(a.diameter)
                    const diameterB = parseInt(b.diameter)
                    if (diameterA < diameterB) {
                        return -1;
                      }
                      if (diameterA > diameterB) {
                        return 1;
                      }
                      return 0;
                })
                planetsCreate(planets)
            }
        })
        .catch((error) => {
            console.log(error)
        })
   
        
}