function CatConstructor(age, name, bread, color){
    this.age = age;
    this.name = name;
    this.bread = bread;
    this.color = color;
    this.catInfo = function () {
        return `This cat ${this.age} years old ,name is ${this.name},bread ${this.bread} and color is ${this.color}`
    }
    
}
let cat1 = new CatConstructor(1,'Rick','Шотландець',"black")
let cat2 = new CatConstructor(4, "Tom", 'Британець', 'white')
let cat3 = new CatConstructor(2,'Jerry','Дворняга','Black')


let catArray = [cat1, cat2, cat3]


catArray.sort((a, b) => {
    return a.age -b.age
})
 console.log(catArray)