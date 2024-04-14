export const getUser = (id: any) =>
  fetch(`http://tasks.tizh.ru/v1/user/view?id=${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
