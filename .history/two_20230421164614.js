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
    let itemNameInput = document.querySelector('.itemName');
    let itemCountryInput = document.querySelector('.itemCountry');
    let getDataButton = document.querySelector('button');
    let getItemName = () => {
        
        let itemName = document.querySelector('.itemName').value;
       console.log(itemName)
    
}
   
    console.log(itemNameInput)
    getDataButton.addEventListener('click',getItemName )

   
   
}