export const sortUsers = (query: string): any =>
  fetch(`http://tasks.tizh.ru/v1/user/index?sort=${query}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
