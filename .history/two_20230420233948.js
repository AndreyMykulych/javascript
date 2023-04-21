window.onload =()=>{
//в html створіть 2 інпута і кнопку.
//в js створіть class по створенню обєкту товару.При вводі данних і натисканні на кнопку додати товар,
// у вас обєкт товару додається в массив 

    class Item {
        constructor(itemName, itemWeight, itemCountry, itemArray = []) {
            this.itemName = itemName;
            this.itemWeight = itemWeight;
            this.itemCountry = itemCountry;
        }
        setItem() {
            itemArray.push(this.itemName, this.itemCountry, this.itemWeight)
            return itemArray
        }
}
   

}