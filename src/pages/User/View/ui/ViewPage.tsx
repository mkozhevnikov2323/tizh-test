import { Avatar, Button } from '@mui/material';
import { deleteUser } from 'features/api/user/deleteUser';
import { getUser } from 'features/api/user/getUser';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { renderFavoriteFood } from 'shared/lib/helpers';
import { Breadcrumbs } from 'widgets/Breadcrumbs';
import './ViewPage.scss';

export const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = () => {
    deleteUser(id)
      .then()
      .catch((err) => console.log('err', err))
      .finally(() => navigate('/'));
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
          onClick={handleDelete}
        >
          Удалить
        </Button>
      </div>

      <table className="view__table">
        <tr>
          <td>
            <b>ID</b>
          </td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>
            <b>Имя</b>
          </td>
          <td>{user?.username}</td>
        </tr>
        <tr>
          <td>
            <b>Email</b>
          </td>
          <td>{user?.email}</td>
        </tr>
        <tr>
          <td>
            <b>Дата рождения</b>
          </td>
          <td>{user?.birthdate}</td>
        </tr>
        <tr>
          <td>
            <b>Любимая еда</b>
          </td>
          <td>{renderFavoriteFood(user?.favorite_food_ids)}</td>
        </tr>
        <tr>
          <td>
            <b>Фото</b>
          </td>
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
