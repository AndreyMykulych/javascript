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
    let getDataButton = document.querySelector('button');
    let getItem = () => {
        
        let itemName = document.querySelector('.itemName').value;
        let itemCountry = document.querySelector('.itemCountry').value;
        console.log(itemName)
        console.log(itemCountry)
    
}
    
    getDataButton.addEventListener('click',getItem )

   let newItem = new Item(getItem)
   
}