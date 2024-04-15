export const deleteUser = (id: any) =>
  fetch(`http://tasks.tizh.ru/v1/user/delete?id=${id}`, {
    method: 'DELETE',
    headers: {
      Accept: '*/*',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
