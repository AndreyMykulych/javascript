window.onload = () => {
  //  2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його в числовому форматі
   // fclearString("hell5o wor6ld")  ======> 56
    
    let clearStringFn = (String) => {
        let regEx = /[a-z]/im
        console.log(string.match(regEx))
    }
    clearStringFn('adasd231')
}