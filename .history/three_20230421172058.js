window.onload = () => {
   // Створіть кнопку яка 
   // відображається на сторінці коли більше 3 товарів в масиві і при dblclick відмальовує список товарів на сторінці
   const itemArray = [];
   class Item {
       constructor(itemName,itemCountry) {
           this.itemName = itemName;
           this.itemCountry = itemCountry;
       }
      
   }
  
    let getDataButton = document.querySelector('button');
    let body = document.querySelector('body')
   getDataButton.addEventListener('click', () => {
       let itemName = document.querySelector('.itemName').value;
       let itemCountry = document.querySelector('.itemCountry').value;
       let newItem = new Item(itemName, itemCountry)
   
       itemArray.push(newItem)
       console.log(itemArray)
       itemName.value = ''
       itemCountry.value = '' 
       if (itemArray.length > 3) {
        let dblclickBtn = document.createElement('button')
        body.appendChild(dblclickBtn)
        dblclickBtn.addEventListener('dblclick', () => {
            let pEl = document.createElement('p')
            [{ ...itemArray }] = [{ itemName, itemCountry }]
            pEl.innerHTML = ` Товар ${itemName} ${itemCountry}`
            console.log(itemName)
             body.appendChild(pEl)
        })
   }
  })
}