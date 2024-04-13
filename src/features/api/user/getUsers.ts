export const getUsers = () =>
  fetch('http://tasks.tizh.ru/v1/user/index', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
  );
