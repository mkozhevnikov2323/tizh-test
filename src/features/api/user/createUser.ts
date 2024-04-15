export const createUser = (formData: any): any =>
  fetch('http://tasks.tizh.ru/v1/user/create', {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('error', error);
    });
