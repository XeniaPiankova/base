// Переменные
// const firstName = "Xeniia"; //camelCase
// var name = "Xeniia"; //можно менять string
//const lastName = "Piankova"; //только для чтения
//let age = 26; //можем менять ее значение number
// const isProgrammer = true; //boolean

// console.log(isProgrammer);

// const _private = "private";
//const if ='gjkflnb'; //error, также нельзя с чисел начинать нахвание переменных

//Мутирование

//console.log("Имя человека: " + firstName + " ,а возраст человека " + age);
//console.log(age.toString()); //как строка
//console.log(age); // как число

//prompt("Введите фамилию");
//const lastName = prompt("Введите фамилию");
//alert(firstName + " " + lastName);

// Операторы
// let currentYear = 2022;
// const birthYear = 1995;
// const age = currentYear - birthYear;
// console.log(age);

// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a;
// c += a;

// console.log(a + b);
// //console.log(currentYear++) //инкрементирует значение на 1
// console.log(currentYear--);
// console.log(c);
//Типы данных
// const isProgrammer = true;
// const name = "Xeniia";
// const age = 26;
// let x
// null
// console.log(typeof isProgrammer); // примитивы в языке
// console.log(typeof name);
// console.log(typeof null);

// Приоритет операторов

// const fullAge = 26;
// const birthYear = 1995;
// const currentYear = 2022;
// const isfullAge = currentYear - birthYear >= fullAge; //precedence
// console.log(isfullAge);

// Условные операторы
// const courseStatus = "pending"; // ready , fail, pending
// if (courseStatus === "ready") {
//   console.log("Курс уже готов и его можно проходить");
// } else if (courseStatus === "pending") {
//   console.log("Курс пока находится в процессе разработки");
// } else if (courseStatus === "fail") {
//   console.log("Курс провалился");
// }

//const isReady = false;
//Тернарное выражение
//isReady ? console.log('Всё готово!') : console.log('Всё не готово!')
// то же самое, что и ниже!
// if (isReady) {
//   console.log("Всё готово!");
// } else {
//   console.log('Всё не готово!')
// }

// const num1 = 42
// const num2 = "42"
// console.log(num1==num2) //проверяется только по значению
// console.log(num1===num2) //  строка не равно числу

//Булевая логика
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators

// Функции

//developer.mozilla.org/ru/docs/Web/JavaScript/Reference/OperatorslogInfoAbout("Ксения", 1995);
// logInfoAbout('Xeniia', 1995)
// function calculateAge(year) {
//   return 2022 - year;
// }
// // const myAge = calculateAge(1995)
// // console.log(myAge)

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   console.log("Человек по имения " + name + " сейчас имеет возраст " + age);
// }

//Массивы
// const cars = ['Mazda','Merz', 'Ford'];
// console.log(cars)
//const cars = new Array('Mazda','Merz', 'Ford'); //задание массива
// const cars = ["Mazda", "Merz", "Ford"];
// console.log(cars.length);
// console.log(cars[1]);
// cars[0]= 'Porsche'
// console.log(cars)
// cars[cars.length]='Mazda'; // динамический индекс(складывать что-то в конец)

// console.log(cars)

// Итерация массивов (циклы)
// const cars = ['Mazda','Merz', 'Ford'];
// for (let i=0; i < cars.length; i++) {
// console.log(i)
// }

// const cars = ["Mazda", "Merz", "Ford"];
// for (let car of cars) {
//   console.log(car);
// }

// Объекты группируем значения - создаем разные структуры
// const person = {
//   firstName: "Kseniia",
//   lastName: "Piankova",
//   languages: ["Ru", "En", "Sp"],
//   hasHusband: true,
//   age: 125,
//   greet: function () {
//     console.log("greet from person");
//   },
// };
// console.log(person.firstName);
// console.log(person['lastName']);
// const key = 'languages';
// console.log(person[key]);

