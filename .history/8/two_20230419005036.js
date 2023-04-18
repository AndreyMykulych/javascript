window.onload = () => {
    let array = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
          }
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618"
            }
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
          }
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653"
            }
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
          }
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
              lat: "29.4572",
              lng: "-164.2990"
            }
          },
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
          }
        }
      ]
    //5) За допомогою js створіть фрагмент з розміткою і виведіть 
   // в нього інформацію з массива, для вивода інформації можете використати  готові класи підключивши bootstrap
    let fragment = document.createDocumentFragment();
    
    let body = document.querySelector('body')
    
    for (i = 0; i < array.length; i++){
        let div = document.createElement('div')
       // div.innerHTML = `${array[i].name}`
        div.classList.add('card')
        div.style.width = '18rem'
        
        let imgEl = document.createElement('img')
        imgEl.setAttribute('src',"user.png")
        imgEl.style.width ='60px'
        imgEl.classList.add("card-img-top")
         
        let divBodyCard = document.createElement('div')
        divBodyCard.classList.add('card-body')
        
        let hCardTitle = document.createElement('h5')
        hCardTitle.classList.add('card-title')
        divBodyCard.appendChild(hCardTitle)

        div.appendChild(divBodyCard)
        div.appendChild(imgEl)
        body.appendChild(div)
    }

 }