export const getUserPhoto = (photo_id: string) =>
  fetch(`http://tasks.tizh.ru/file/get?id=${photo_id}`, {
    method: 'GET',
    headers: {
      Accept: 'multipart/form-data',
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
  );
