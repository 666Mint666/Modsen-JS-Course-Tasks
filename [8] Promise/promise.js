async function fetchDataFromMultipleApis(urls) {
    try {
      // Используем Promise.all() для выполнения нескольких запросов одновременно
      const responses = await Promise.all(urls.map(url => fetch(url)));
  
      // Преобразуем ответы в массив данных
      const data = await Promise.all(responses.map(response => response.json()));
  
      // Объединяем результаты в один массив
      return [].concat(...data);
    } catch (error) {
      // Обрабатываем ошибки
      console.error('Ошибка при извлечении данных:', error);
      throw error;
    }
  }

  const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
  ];
  
  fetchDataFromMultipleApis(urls)
    .then(data => {
      console.log('Объединенные данные:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  