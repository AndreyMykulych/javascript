window.onload = () => {
    //3) Отримайте від користувача значення радіуса кола і намалюйте коло за допомгою svg
    let radius = prompt('Введіть радіус кола');
    document.querySelector('circle').setAttribute('r',radius)
}