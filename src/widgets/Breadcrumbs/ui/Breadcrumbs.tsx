/* eslint-disable array-callback-return */
import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const AppBreadcrumbs = ({ breadcrumbsOptions, id = null }: any) => (
  <Breadcrumbs
    aria-label="breadcrumb"
    className="breadcrumbs"
  >
    {Object.entries(breadcrumbsOptions).map(([key, value]: [string, any]) => {
      if (key === 'links') {
        return (value as Array<any>)?.map((item) => (
          <Link
            color="primary"
            to={`${item.href}`}
          >
            {`${item.title}`}
          </Link>
        ));
      }
      return false;
    })}

    <Typography color="text.primary">
      {id ?? breadcrumbsOptions.text}
    </Typography>
  </Breadcrumbs>
);
