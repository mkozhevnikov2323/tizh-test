export const getUserPhoto = (
  photo_id: string,
): Promise<void | ReadableStreamDefaultReader<Uint8Array>> => {
  console.log('photo_id', photo_id);

  const url = `http://tasks.tizh.ru/file/get?id=${photo_id}`;
  console.log('url', url);

  return fetch(`http://tasks.tizh.ru/file/get?id=${photo_id}`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      Accept: 'multipart/form-data',
      'User-Agent': 'Mozilla/5.0',
    },
  })
    .then((response) => {
      response.blob();
    })
    .catch((error: any): any => {
      console.log('Ошибка при отправке запроса:', error);
    });
};
