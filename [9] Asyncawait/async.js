async function fetchDataFromMultipleServers(urls) {
    try {
      // Используем Promise.all() для выполнения нескольких запросов одновременно
      const responses = await Promise.all(urls.map(url => fetch(url)));
  
      // Преобразуем ответы в массив данных
      const data = await Promise.all(responses.map(response => response.json()));
  
      // Возвращаем объединенные данные
      return data;
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
  
  fetchDataFromMultipleServers(urls)
    .then(data => {
      console.log('Объединенные данные:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  