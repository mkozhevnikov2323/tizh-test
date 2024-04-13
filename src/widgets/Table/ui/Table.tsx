import { TextField } from '@mui/material';
import './Table.scss';
import { DatePicker } from 'widgets/DatePicker';
import { ReactNode, useEffect, useState } from 'react';
import { getUsers } from 'features/api/user/getUsers';
import { getUserPhoto } from 'features/api/file/getUserPhoto';

export function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  const getPhoto = async (photo_id: string): Promise<string> => {
    const userPhoto = await getUserPhoto(photo_id);
    console.log('userPhoto', userPhoto);
    return '';
  };

  const renderUsers = (users: any): ReactNode =>
    users.map(
      ({
        id,
        username,
        email,
        birthdate,
        favorite_food_ids,
        photo_id,
      }: any) => (
        <tr key={id}>
          <td>1</td>
          <td>{id}</td>
          <td>
            <img
              id={photo_id && `${photo_id}`}
              className="avatar"
              // src={getPhoto(photo_id)}
              alt=""
            />
          </td>
          <td>{username}</td>
          <td>
            <a href={`mailto:${email}`}>{email}</a>
          </td>
          <td>{birthdate}</td>
          <td>{favorite_food_ids}</td>
          <td>
            <a
              href={`/user/view?id=${id}`}
              title="Просмотр"
              aria-label="Просмотр"
              data-pjax="0"
            >
              svg
            </a>
            <a
              href={`/user/update?id=${id}`}
              title="Редактировать"
              aria-label="Редактировать"
              data-pjax="0"
            >
              svg
            </a>
            <a
              href={`/user/delete?id=${id}`}
              title="Удалить"
              aria-label="Удалить"
              data-pjax="0"
              data-confirm="Вы уверены, что хотите удалить этот элемент?"
              data-method="post"
            >
              svg
            </a>
          </td>
        </tr>
      ),
    );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <a
              href="/user/index?sort=id"
              data-sort="id"
            >
              ID
            </a>
          </th>
          <th>
            <a
              href="/user/index?sort=photo_id"
              data-sort="photo_id"
            >
              Фото
            </a>
          </th>
          <th>
            <a
              href="/user/index?sort=username"
              data-sort="username"
            >
              Имя
            </a>
          </th>
          <th>
            <a
              className="desc"
              href="/user/index?sort=email"
              data-sort="email"
            >
              Email
            </a>
          </th>
          <th>
            <a
              href="/user/index?sort=birthdate"
              data-sort="birthdate"
            >
              Дата рождения
            </a>
          </th>
          <th>
            <a
              href="/user/index?sort=favorite_food_ids"
              data-sort="favorite_food_ids"
            >
              Любимая еда
            </a>
          </th>
          <th>&nbsp;</th>
        </tr>
        <tr>
          <td>&nbsp;</td>
          {/* <td><input type="text" className="form-control" name="UserSearch[id]" /></td> */}
          <td>
            {' '}
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </td>
          <td>&nbsp;</td>
          <td>
            {' '}
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </td>
          <td>
            {' '}
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </td>
          <td>
            <DatePicker />
          </td>
          <td>
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody>{renderUsers(users)}</tbody>
    </table>
  );
}
