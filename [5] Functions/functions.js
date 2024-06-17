function findFirstNonRepeatedChar(str) {
    // Создаем объект, в котором будем хранить частоту встречаемости каждого символа
    const charFreq = {};
  
    // Перебираем каждый символ в строке
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Если символ уже встречался, увеличиваем его счетчик
      if (charFreq[char]) {
        charFreq[char]++;
      } 
      // Если символ встречается впервые, добавляем его в объект с частотой 1
      else {
        charFreq[char] = 1;
      }
    }
  
    // Перебираем объект с частотой символов и ищем первый символ с частотой 1
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charFreq[char] === 1) {
        return char;
      }
    }
  
    // Если ни один символ не является уникальным, возвращаем null
    return null;
  }

console.log(findFirstNonRepeatedChar("abacddbec")); //"e"
console.log(findFirstNonRepeatedChar("abab")); // null
console.log(findFirstNonRepeatedChar("hello")); //"h"
