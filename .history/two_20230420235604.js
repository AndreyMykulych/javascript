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
    let itemNameInput = document.querySelectorAll('itemName');
    let itemCountryInput = document.querySelectorAll('itemName');
    let buttonElement = document.querySelector('button');
    
console.log(itemNameInput.value='call')

    let item = new Item(itemNameInput.value.onchange(),itemCountryInput.value)
    itemArray.push(item)
    console.log(itemArray)
}