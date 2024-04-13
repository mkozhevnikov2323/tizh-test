import { Breadcrumbs, Link, Typography, Button } from '@mui/material';
import './IndexPage.scss';
import { Table } from 'widgets/Table';

export const IndexPage = () => (
  <div>
    <Breadcrumbs
      aria-label="breadcrumb"
      className="breadcrumbs"
    >
      <Link
        underline="hover"
        color="primary"
        href="/"
      >
        Главная
      </Link>
      <Typography color="text.primary">Пользователи</Typography>
    </Breadcrumbs>
    <Button
      className="btn"
      href="/create"
    >
      Добавить пользователя
    </Button>
    <Table />
  </div>
);
