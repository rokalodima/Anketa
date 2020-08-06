// Создать репозиторий Anketa
// Спросить у пользователя:
// Фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
// Возраст в годах (оператором prompt)
// Пол (оператором confirm, например, “Ваш пол - мужской?”)
// Вывести оператором alert анкету пользователя по примеру:
// Ваше ФИО:
// Ваш возраст в годах:
// Ваш возраст в днях:
// Через 5 лет вам будет:
// Ваш пол:
// Вы на пенсии:
// PS: (пенсионный возраст: Ж-55 / М-65)

let surName = prompt("Введите фамилию");
let name = prompt("Введите имя");
let lastName = prompt("Введите отчество");
let age = prompt("Сколько Вам лет?");
let sex = confirm("Ваш пол женский?");

alert("ФИО: " + surName + " " + name + " " + lastName);
alert("Ваш возраст: " + age);
alert("Ваш возраст в днях: " + age * 365);
alert("Через 5 лет вам будет: " + (+age + 5));
if (sex) {
  alert("Ваш пол - женский");
} else {
  alert("Ваш пол - мужской");
}

if (sex == true && sex >= 55) {
  alert("Вы на пенсии");
} else if (sex == false && sex >= 65) {
  alert("Вы на пенсии");
} else {
  alert("вы работаете");
}
// switch (old) {
//   case sex == true && old >= 55:
//     alert("Вы на пенсии");
//     break;
//   case sex == true && old <= 54:
//     alert("Вы работаете");
//     break;
//   case sex == false && old >= 65:
//     alert("Вы на пенсии");
//     break;
//   case sex == false && old <= 64:
//     alert("Вы работаете");
//     break;
//   default:
//     alert("Это не выполнится");
// }
// alert(old);
