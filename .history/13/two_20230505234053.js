window.onload = () => {
    // 2) Створити трай кетч з кастомним обробником помилки. Також додайте в catch  обробку цієї помилки і виведіть alert що помилка оброблена

    try {
       throw new Error('Моя помилка')
    }

    catch (e) {
        if (e === 'Моя помилка') {
            alert('Моя помилка була оброблена')
        }
        else {
            alert(error.message)
        }
    }
}