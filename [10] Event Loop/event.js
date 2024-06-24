function generateRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log(`Сгенерировано число: ${randomNumber}`);
  
      setTimeout(() => {
        if (randomNumber <= 5) {
          resolve(`Успешное выполнение с задержкой ${randomNumber} секунд.`);
        } else {
          reject(`Ошибка с задержкой ${randomNumber} секунд.`);
        }
      }, randomNumber * 1000);
    });
  }

  generateRandomNumber()
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });
