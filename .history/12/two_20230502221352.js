window.onload = () => {
  //  2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його в числовому форматі
   // fclearString("hell5o wor6ld")  ======> 56
    
    let clearStringFn = (string) => {
        let regEx = /[a-z]/ig
        console.log(string.replace(regEx,''))
    }
    clearStringFn('adasd231')
}