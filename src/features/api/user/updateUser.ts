export const updateUser = (formData: any, id: any) => {
  const entries = formData.entries();
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of entries) {
    console.log(entry);
  }

  return fetch(`http://tasks.tizh.ru/v1/user/update?id=${id}`, {
    method: 'PUT',
    headers: {
      Accept: '*/*',
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
};
