function sumFirstAndLastDigit(num) {
    // Преобразуем число в строку, чтобы получить отдельные цифры
    const numStr = num.toString();
    
    // Получаем первую и последнюю цифры
    const firstDigit = parseInt(numStr[0]);
    const lastDigit = parseInt(numStr[numStr.length - 1]);
    
    // Вычисляем и выводим сумму
    const sum = firstDigit + lastDigit;
    console.log(`Сумма первой и последней цифры числа ${num} равна ${sum}`);
  }
  
sumFirstAndLastDigit(1234); 
sumFirstAndLastDigit(9876); 
sumFirstAndLastDigit(1); 
