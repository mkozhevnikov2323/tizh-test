import { Avatar, Button } from '@mui/material';
import { getUser } from 'features/api/user/getUser';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { foodList } from 'shared/lib/constants';
import { renderFavoriteFood } from 'shared/lib/helpers';
import { Breadcrumbs } from 'widgets/Breadcrumbs';

export const ViewPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log('err', err));
  }, []);

  const breadcrumbsOptions = {
    links: [
      {
        title: 'Главная',
        href: '/',
      },
      {
        title: 'Пользователи',
        href: '/',
      },
    ],
    text: '',
  };

  return (
    <div className="view">
      <Breadcrumbs
        breadcrumbsOptions={breadcrumbsOptions}
        id={id}
      />
      <div className="view__btn-group">
        <Link to={`/update/${id}`}>
          <Button
            variant="contained"
            color="primary"
          >
            Изменить
          </Button>
        </Link>
        <Button
          variant="contained"
          color="error"
        >
          Удалить
        </Button>
      </div>

      <table>
        <tr>
          <td>ID</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Имя</td>
          <td>{user?.username}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user?.email}</td>
        </tr>
        <tr>
          <td>Дата рождения</td>
          <td>{user?.birthdate}</td>
        </tr>
        <tr>
          <td>Любимая еда</td>
          <td>{renderFavoriteFood(user?.favorite_food_ids)}</td>
        </tr>
        <tr>
          <td>Фото</td>
          <td>
            <Avatar
              alt="S"
              src={
                user?.photo_id &&
                `http://tasks.tizh.ru/file/get?id=${user?.photo_id}`
              }
              sx={{
                width: '150px',
                height: '150px',
              }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};
