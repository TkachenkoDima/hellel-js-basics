// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
	{ name: 'John', age: 25 },
	{ name: 'Kek', age: 36 },
	{ name: 'Ololo', age: 47 },
];

for (const { name, age } of users) {
	console.log(`Name: ${name}, Age: ${age}`);
}

console.log('-------------------');

for (const user of users) {
	const { name, age } = user;
	console.log(`Name: ${name}, Age: ${age}`);
}
