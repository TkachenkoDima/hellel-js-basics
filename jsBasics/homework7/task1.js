// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

function handleNum(number, handleEven, handleOdd) {
	if (number % 2 === 0) {
		handleEven();
	} else {
		handleOdd();
	}
}

function handleEven() {
	console.log('Number is even');
}

function handleOdd() {
	console.log('Number is odd');
}

handleNum(2, handleEven, handleOdd);
