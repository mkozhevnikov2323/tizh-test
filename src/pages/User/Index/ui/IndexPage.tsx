import { Button } from '@mui/material';
import './IndexPage.scss';
import { Table } from 'widgets/Table';
import { Breadcrumbs } from 'widgets/Breadcrumbs';

export const IndexPage = () => (
  <div className="indexPage">
    {/* todo: make universal component */}
    <Breadcrumbs />
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
