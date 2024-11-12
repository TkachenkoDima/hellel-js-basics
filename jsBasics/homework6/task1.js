// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function rectangleAreaWithDeclaration(width, height) {
    return width * height;
}
console.log('Rectangle area with function declaration: ', rectangleAreaWithDeclaration(5, 10));
console.log('----------');

const rectangleAreaWithExpression = function (width, height) {
    return width * height;
}
console.log('Rectangle area with function expression: ', rectangleAreaWithExpression(5, 10));
console.log('----------');

const rectangleAreaWithArrowFunction = (width, height) => width * height;
console.log('Rectangle area with arrow function:', rectangleAreaWithArrowFunction(5, 10));
console.log('----------');
