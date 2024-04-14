import { Avatar, TextField } from '@mui/material';
import './Table.scss';
import { DatePicker } from 'widgets/DatePicker';
import { ReactNode, useEffect, useState } from 'react';
import { getUsers } from 'features/api/user/getUsers';
import { foodList } from 'shared/lib/constants';
import { UserSearchField, UserSearchFieldByDate } from 'features/search/user';

export function Table() {
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState(null);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  const renderFavoriteFood = (favorite_food_ids: any) =>
    Object.entries(foodList)
      .filter(([key, value]) => favorite_food_ids.includes(key))
      .map(([key, value], index, array) => {
        if (index === array.length - 1) {
          return value;
        }
        return `${value}, `;
      });

  const renderUsers = (users: any): ReactNode =>
    users?.map(
      (
        { id, username, email, birthdate, favorite_food_ids, photo_id }: any,
        index: any,
      ) => (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{id}</td>
          <td>
            <Avatar
              alt="S"
              src={photo_id && `http://tasks.tizh.ru/file/get?id=${photo_id}`}
              sx={{
                width: '150px',
                height: '150px',
              }}
            />
          </td>
          <td>{username}</td>
          <td>
            <a href={`mailto:${email}`}>{email}</a>
          </td>
          <td>{birthdate}</td>
          <td>{renderFavoriteFood(favorite_food_ids)}</td>
          <td>
            <a
              href={`/user/view?id=${id}`}
              title="Просмотр"
              aria-label="Просмотр"
              data-pjax="0"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="table__svg"
              >
                <path
                  fill="currentColor"
                  d="M573 241C518 136 411 64 288 64S58 136 3 241a32 32 0 000 30c55 105 162 177 285 177s230-72 285-177a32 32 0 000-30zM288 400a144 144 0 11144-144 144 144 0 01-144 144zm0-240a95 95 0 00-25 4 48 48 0 01-67 67 96 96 0 1092-71z"
                />
              </svg>
            </a>
            <a
              href={`/user/update?id=${id}`}
              title="Редактировать"
              aria-label="Редактировать"
              data-pjax="0"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="table__svg"
              >
                <path
                  fill="currentColor"
                  d="M498 142l-46 46c-5 5-13 5-17 0L324 77c-5-5-5-12 0-17l46-46c19-19 49-19 68 0l60 60c19 19 19 49 0 68zm-214-42L22 362 0 484c-3 16 12 30 28 28l122-22 262-262c5-5 5-13 0-17L301 100c-4-5-12-5-17 0zM124 340c-5-6-5-14 0-20l154-154c6-5 14-5 20 0s5 14 0 20L144 340c-6 5-14 5-20 0zm-36 84h48v36l-64 12-32-31 12-65h36v48z"
                />
              </svg>
            </a>
            <a
              href={`/user/delete?id=${id}`}
              title="Удалить"
              aria-label="Удалить"
              data-pjax="0"
              data-confirm="Вы уверены, что хотите удалить этот элемент?"
              data-method="post"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="table__svg"
              >
                <path
                  fill="currentColor"
                  d="M32 464a48 48 0 0048 48h288a48 48 0 0048-48V128H32zm272-256a16 16 0 0132 0v224a16 16 0 01-32 0zm-96 0a16 16 0 0132 0v224a16 16 0 01-32 0zm-96 0a16 16 0 0132 0v224a16 16 0 01-32 0zM432 32H312l-9-19a24 24 0 00-22-13H167a24 24 0 00-22 13l-9 19H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z"
                />
              </svg>
            </a>
          </td>
        </tr>
      ),
    );

  return (
    <>
      <div className="summary">
        Показаны записи <b>1-{users?.length}</b> из <b>{users?.length}</b>
      </div>
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
            <td>
              <UserSearchField
                searchParam={searchParam}
                setSearchParam={setSearchParam}
                setUsers={setUsers}
                searchType="id"
              />
            </td>
            <td>&nbsp;</td>
            <td>
              <UserSearchField
                searchParam={searchParam}
                setSearchParam={setSearchParam}
                setUsers={setUsers}
                searchType="username"
              />
            </td>
            <td>
              <UserSearchField
                searchParam={searchParam}
                setSearchParam={setSearchParam}
                setUsers={setUsers}
                searchType="email"
              />
            </td>
            <td>
              <UserSearchFieldByDate setUsers={setUsers} />
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
    </>
  );
}
