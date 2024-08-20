// 1 Завдання

const messageHello = () => "Hello world!";

const showMessage = (callback) => {
  const message = callback();
  alert(message);
};

showMessage(messageHello);

// 2 Завдання

const randomNumber = Math.floor(Math.random() * 100) + 1;
const peopleNumber = prompt("Вгадайте число від 1 до 100:");

if (peopleNumber == randomNumber) {
  alert("Вітаємо! Ви вгадали правильне число");
} else {
  alert(`Нажаль, ви не вгадали. Правильне число було: ${randomNumber}`);
}

// 3 Завдання

let DataInput = 1;

function getUserInput() {
  const userInput = prompt("Введіть будь-які дані:");

  if (userInput === null) {
    alert("Ви скасували введення.");

    return;
  }

  alert(`Ви ввели дані ${DataInput} разів.`);

  DataInput = DataInput + 1;

  getUserInput();
}

getUserInput();

// 4 Завдання

const numbers = [1, 2, 3, 4, 5];

function CallbackArray(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const multiplyNumbers = CallbackArray(numbers, function (num) {
  return num * num;
});

console.log(multiplyNumbers);

// 5 Завдання

const calculateDiscountedPrice = (price, discountPercent) => {
  const applyDiscount = (price, discount) => price - price * (discount / 100);

  return applyDiscount(price, discountPercent);
};

const originalPrice = 100;
const discount = 20;
const discountedPrice = calculateDiscountedPrice(originalPrice, discount);

console.log(`Оригінальна ціна: ${originalPrice}`);
console.log(`Знижка: ${discount}%`);
console.log(`Дисконтна ціна: ${discountedPrice}`);
