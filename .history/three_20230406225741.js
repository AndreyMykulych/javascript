let CatConstructor = (age, name, bread, color) => {
    this.age = age;
    this.name = name;
    this.bread = bread;
    this.color = color;
    this.catInfo = () => {
        return `This cat ${this.age} years old ,name is ${this.name},bread ${this.bread} and color is ${this.color}`
    }
    
}
let blackCat = new CatConstructor((18,'Rick','No bread',"black"))

console.log(blackCat)