// 1 Завдання

const messageHello = () => "Hello world!";

const showMessage = (callback) => {
  const message = callback();
  alert(message);
};

showMessage(messageHello);

