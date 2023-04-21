window.onload =()=>{
//в html створіть 2 інпута і кнопку.
//в js створіть class по створенню обєкту товару.При вводі данних і натисканні на кнопку додати товар,
// у вас обєкт товару додається в массив 
let itemArray = [];
    class Item {
        constructor(itemName, itemWeight, itemCountry) {
            this.itemName = itemName;
            this.itemWeight = itemWeight;
            this.itemCountry = itemCountry;
        }
       
}
    let itemNameInput = document.querySelectorAll('itemName');
    let itemCountryInput = document.querySelectorAll('itemName');
    let buttonElement = document.querySelector('button');
    


    let item = new Item('nokia', 80, 'UA')
    itemArray.push(item)
    console.log(itemArray)
}