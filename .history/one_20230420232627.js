window.onload = () => {
    //1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, якщо створено більше 
    //5 дівів.Покажіть на сторінці кнопку, видалити всі створені елементи.При натисканні на кнопку
    //всі створенні div елементи видаляються
    const createDivBtn = document.getElementById('create-div-btn'); // отримуємо кнопку за ID
    const divContainer = document.getElementById('div-container'); // отримуємо контейнер за ID
    let divCount = 0; // лічильник кількості створених дівів
  
    createDivBtn.addEventListener('click', () => {
      divCount++; // збільшуємо лічильник кількості дівів
  
      // створюємо новий дів з порядковим номером всередині
      const newDiv = document.createElement('div');
      newDiv.textContent = `Дів номер ${divCount}`;
  
      // додаємо новий дів до контейнера
      divContainer.appendChild(newDiv);
  
      // якщо на сторінці створено більше 5 дівів, то створюємо кнопку для видалення всіх дівів
      if (divCount > 5) {
        const removeDivBtn = document.createElement('button');
        removeDivBtn.textContent = 'Видалити всі діви';
        removeDivBtn.addEventListener('click', () => {
          divContainer.innerHTML = ''; // видаляємо всі діви з контейнера
          divCount = 0; // скидаємо лічильник кількості дівів
          removeDivBtn.remove(); // видаляємо кнопку для видалення дівів
        });
        divContainer.appendChild(removeDivBtn);
      }
    });
}