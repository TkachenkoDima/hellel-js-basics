// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide (numerator, denominator) {
    if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error('One of the arguments is not a number');
    }
    if (denominator === 0) {
        throw new Error(`Can't divide by zero`);
    }
    return numerator / denominator;
}

try {
    console.log(divide ("kek", 0));
}
catch (error) {
    console.log(error.message);
}
finally {
    console.log('Job done!');
}