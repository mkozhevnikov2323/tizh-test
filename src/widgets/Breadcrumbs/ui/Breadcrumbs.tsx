import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export const AppBreadcrumbs = () => (
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
);
