// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .
// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

//Common approach
let number = 4;

for (let i = 1; i <= 10; i++) {
	console.log(`${number} x ${i} = ${number * i}`);
}
console.log('---------------------');

let i = 1;
while (i <= 10) {
	console.log(`${number} x ${i} = ${number * i}`);
	i++;
}
console.log('---------------------');

//Then I was bored and decided to make it interactive
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const askQuestion = () => {
	rl.question('Enter a number to get the multiplication table: ', (input) => {
		const number = parseInt(input.trim());

		if (isNaN(number) || number < 1) {
			console.log('Please enter a valid number.');
		} else {
			for (let i = 1; i <= 10; i++) {
				console.log(`${number} x ${i} = ${number * i}`);
			}
		}

		rl.close();
	});
};

askQuestion();
