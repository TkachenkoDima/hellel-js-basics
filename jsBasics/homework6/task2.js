// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

//Common function
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log('Is person adult?', checkAge(25));
console.log('Is person adult?',checkAge(15));
console.log('----------');

//Ternary operator  
function isAdult(age) {
    return age >= 18 ? true : false;
}
console.log('Is person adult?', isAdult(25));
console.log('Is person adult?', isAdult(15));
console.log('----------');