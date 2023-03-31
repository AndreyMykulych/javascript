let planet = prompt('Введіть планету');

switch (planet) {
case "Меркурій" :
 case "Венера":
 case "Земля" :
 case "Марс":
case "Юпітер":
case "Сатурн":
 case "Уран":
case "Нептун":
    document.write('Планета знаходиться в сонячній системі');
        break;
    default:
        document.write('Введена вами планета не знаходиться в сонячній системі')
}