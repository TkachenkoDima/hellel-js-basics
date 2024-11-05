// Завдання 1: Визначення рівня успішності студента
// Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. Напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки.
// Створіть змінну averageGrade і присвойте їй середню оцінку студента (від 0 до 100).
// За допомогою конструкції if else, визначте та виведіть у консоль рівень успішності студента:
// Якщо середня оцінка менше 60, вивести "Незадовільно".
// Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
// Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
// Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
// Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".

const averageGrade = 85;

switch (true) {
    case averageGrade < 60:
        console.log('Not good enough');
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log('Acceptable');
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log('Good');
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        console.log('Very good');
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        console.log('Excellent');
        break;
    default:
        console.log('Invalid grade');
}