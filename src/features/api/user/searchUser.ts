export const searchUserById = (userId: number): any =>
  fetch(`http://tasks.tizh.ru/v1/user/index?UserSearch%5Bid%5D=${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
