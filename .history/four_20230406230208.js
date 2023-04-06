function CatConstructor(age, name, breed, color) {
    this.age = age;
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  
  // Створення трьох об'єктів з використанням конструктора
  const cat1 = new CatConstructor(2, "Mittens", "Persian", "white");
  const cat2 = new CatConstructor(3, "Whiskers", "Siamese", "gray");
  const cat3 = new CatConstructor(1, "Toby", "Maine Coon", "brown");
  
  // Перевірка результату
  console.log(cat1);
  console.log(cat2);
  console.log(cat3);