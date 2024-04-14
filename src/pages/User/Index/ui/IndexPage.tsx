import { Button } from '@mui/material';
import './IndexPage.scss';
import { Table } from 'widgets/Table';
import { Breadcrumbs } from 'widgets/Breadcrumbs';

export const IndexPage = () => {
  const breadcrumbsOptions = {
    links: [
      {
        title: 'Главная',
        href: '/',
      },
    ],
    text: 'Пользователи',
  };

  return (
    <div className="indexPage">
      {/* todo: make universal component */}
      <Breadcrumbs breadcrumbsOptions={breadcrumbsOptions} />
      <Button
        className="btn"
        href="/create"
        sx={{
          width: 'max-content',
          textTransform: 'initial',
        }}
      >
        Добавить пользователя
      </Button>
      <Table />
    </div>
  );
};
