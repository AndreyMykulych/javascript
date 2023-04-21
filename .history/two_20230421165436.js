window.onload =()=>{
//в html створіть 2 інпута і кнопку.
//в js створіть class по створенню обєкту товару.При вводі данних і натисканні на кнопку додати товар,
// у вас обєкт товару додається в массив 
let itemArray = [];
    class Item {
        constructor(itemName,itemCountry) {
            this.itemName = itemName;
            this.itemCountry = itemCountry;
        }
       
    }
    let itemName = document.querySelector('.itemName').value;
        let itemCountry = document.querySelector('.itemCountry').value;
    let getDataButton = document.querySelector('button');
    let getItem = () => {
        
        let itemName = document.querySelector('.itemName').value;
        let itemCountry = document.querySelector('.itemCountry').value;
        console.log(itemName)
        console.log(itemCountry)
    
}
    
    

    let newItem = new Item(itemName,itemCountry)
    console.log(newItem)
    getDataButton.addEventListener('click',getItem )
}