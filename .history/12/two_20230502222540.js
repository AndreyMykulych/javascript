window.onload = () => {
  //  2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його в числовому форматі
   // fclearString("hell5o wor6ld")  ======> 56
    
    let clearStringFn = (string) => {
        let regEx = /\D/g
        result = string.replace(regEx, '')
       
        return Number(result)
    }
   console.log( clearStringFn('hell5o wor6ld'))
}