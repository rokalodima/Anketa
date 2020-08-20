// // Создать репозиторий Anketa
// // Спросить у пользователя:
// // Фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
// // Возраст в годах (оператором prompt)
// // Пол (оператором confirm, например, “Ваш пол - мужской?”)
// // Вывести оператором alert анкету пользователя по примеру:
// // Ваше ФИО:
// // Ваш возраст в годах:
// // Ваш возраст в днях:
// // Через 5 лет вам будет:
// // Ваш пол:
// // Вы на пенсии:
// // PS: (пенсионный возраст: Ж-55 / М-65)

// const surName = prompt("Введите фамилию");
// const name = prompt("Введите имя");
// const lastName = prompt("Введите отчество");
// const age = prompt("Сколько Вам лет?");
// const sex = confirm("Ваш пол женский?");
// const gender = sex ? "Женский" : "Мужской";
// // alert("ФИО: " + surName + " " + name + " " + lastName);
// // alert("Ваш возраст: " + age);
// // alert("Ваш возраст в днях: " + age * 365);
// // alert("Через 5 лет вам будет: " + (+age + 5));

// // if (sex) {
// //   alert("Ваш пол - женский");
// // } else {
// //   alert("Ваш пол - мужской");
// // }
// let pension = null;

// // if (sex === true && age >= 55) {
// //   alert("Вы на пенсии");
// // } else if (sex === false && age >= 65) {
// //   alert("Вы на пенсии");
// // } else {
// //   alert("вы работаете");
// // }

// if (sex && age >= 55) {
//   pension = "Вы на пенсии";
// } else if (!sex && age >= 65) {
//   pension = "Вы на пенсии";
// } else {
//   pension = "Вы работаете";
// }
// alert(`ФИО: ${surName} ${name} ${lastName}
// Ваш возраст: ${age}
// Ваш возраст в днях: ${age * 365}
// Через 5 лет вам будет: ${+age + 5}
// Ваш пол: ${gender}\n${pension}`);

/////////////////////////////////////////////////из введенной строки посчитать сколько гласных

// const letter = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
// const string = prompt("Введите строку");
// let counter = 0;
// for (let i = 0; i < string.length; i++) {
//   for (let j = 0; j < letter.length; j++) {
//     if (string[i] === letter[j] || string[i] === letter[j].toUpperCase()) {
//       counter++;
//       break;
//     }
//   }
// }
// alert(counter);

// let surName = null;
// let name = null;
// let lastName = null;

// loop: while (true) {
//   surName = prompt("Введите фамилию");
//   const isNumberSurname = +surName;
//   if (!isNaN(isNumberSurname)) {
//     continue loop;
//   }
//   name = prompt("Введите имя");
//   const isNumberName = +name;
//   if (!isNaN(isNumberName)) {
//     continue loop;
//   }
//   lastName = prompt("Введите отчество");
//   const isNumberLastName = +lastName;
//   if (!isNaN(isNumberLastName)) {
//     continue loop;
//   }
//   break loop;
// }

// let age = null;
// loop: while (true) {
//   age = +prompt("Ваш возраст?");
//   if (isNaN(age)) {
//     continue loop;
//   } else {
//     break loop;
//   }
// }

// let sex = confirm("Ваш пол женский?");
// let howOld = "вы работаетe";
// if (sex === true && age >= 55) {
//   howOld = "Вы на пенсии";
// } else if (sex === false && age >= 65) {
//   howOld = "Вы на пенсии";
// }

// const info = `ФИО: ${surName} ${name} ${lastName}
//     Ваш возраст: ${age}
//     Ваш возраст в днях: ${age * 365}
//     Ваш пол - ${sex ? "женский" : "мужской"}
//     Через 5 лет вам будет: ${age + 5}
//     Пенсионный возраст: Ж-55 / М-65 ${howOld}`;
// alert(info);

const init = () => {
  const name = getValidate("Введите имя: ", isCorrectName);
  const surName = getValidate("Введите фамилию : ", isCorrectName);
  const lastName = getValidate("Введите отчество: ", isCorrectName);
  const age = getValidate("Ваш возраст: ", isCorrectAge);
  let sex = confirm("Ваш пол женский?");
  Anketa(
    surName,
    name,
    lastName,
    age,
    gender(sex),
    pension(sex, age),
    +age + 5
  );
};

const isCorrectName = (name) => {
  if (!name || !isNaN(+name)) {
    return false;
  } else {
    return true; // нужно(можно и так) убрать else   !!!!
  }
};

const isCorrectAge = (age) => {
  if (!age || age <= 0 || isNaN(+age)) {
    return false;
  }
  return true;
};

const gender = (sex) => {
  if (sex) {
    return "Вы женщина";
  }
  return "Вы мужчина";
};

const pension = (sex, age) => {
  if (sex && age >= 55) {
    return "Вы на пенсии";
  } else if (!sex && age >= 65) {
    return "Вы на пенсии";
  } else {
    return "Вы работаете";
  }
};

// const getValidate = (message, func) => {
//   let data = prompt(message); /////!func(data)
//   while (func(data) === false) {
//     data = prompt(message);
//   }
//   return data;
// };

const getValidate = (message, func) => {
  let data = prompt(message);
  if (!func(data)) {
    alert("Некорректный ввод!!");
    return getValidate(message, func);
  }
  return data;
};

const Anketa = (name, surName, age, sex, pension, ageFive) => {
  alert(`${name}\n${surName}\n${age}\n${sex}\n${pension}\n${ageFive} `);
};
init();
