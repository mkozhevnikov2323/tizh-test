export const searchUserById = (query: string, searchType: string): any =>
  fetch(
    `http://tasks.tizh.ru/v1/user/index?UserSearch%5B${searchType}%5D=${query}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });

export const searchUserByDate = (
  birthdateStart: string,
  birthdateEnd: string,
): any => {
  const createUrl = (birthdateStart: string, birthdateEnd: string): string => {
    if (birthdateStart === '' && birthdateEnd !== '') {
      return `http://tasks.tizh.ru/v1/user/index?UserSearch%5BbirthdateEnd%5D=${birthdateEnd}`;
    }
    if (birthdateEnd === '' && birthdateStart !== '') {
      return `http://tasks.tizh.ru/v1/user/index?UserSearch%5BbirthdateStart%5D=${birthdateStart}`;
    }
    if (birthdateStart !== '' && birthdateEnd !== '') {
      return `http://tasks.tizh.ru/v1/user/index?UserSearch%5BbirthdateStart%5D=${birthdateStart}&UserSearch%5BbirthdateEnd%5D=${birthdateEnd}`;
    }
    return `http://tasks.tizh.ru/v1/user/index`;
  };

  return fetch(createUrl(birthdateStart, birthdateEnd), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
};

export const searchUserByFood = (values: string[]): any => {
  let url = 'http://tasks.tizh.ru/v1/user/index';

  if (values.length) {
    for (let i = 0; i < values.length; i += 1) {
      if (i === 0) {
        url += `?UserSearch%5BfoodIds%5D%5B%5D=${values[0]}`;
        // eslint-disable-next-line no-continue
        continue;
      }
      url += `&UserSearch%5BfoodIds%5D=${values[i]}`;
    }
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('Ошибка при отправке запроса:', error);
    });
};
