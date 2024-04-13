/* eslint-disable no-restricted-syntax */
export const createUser = (formData: any): any => {
  // Проверка содержимого FormData
  for (const pair of formData.entries()) {
    // eslint-disable-next-line no-console
    console.log('eer', `${pair[0]}, ${pair[1]}`);
  }

  // fetch('http://tasks.tizh.ru/v1/user/create', {
  //   method: 'POST',
  //   headers: {
  //     Accept: '/',
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   mode: 'no-cors',
  //   body: formData,
  // })
  //   .then((res) =>
  //     res.ok ? res.json() : Promise.reject(`Ошибка: ${res.text()}`),
  //   )
  //   .catch((error) => {
  //     console.log('Request failed', error);
  //   });
};
