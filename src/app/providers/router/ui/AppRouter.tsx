import { Layout } from 'app/providers/layout';
import { CreatePage } from 'pages/User/Create';
import { IndexPage } from 'pages/User/Index';
import { UpdatePage } from 'pages/User/Update';
import { ViewPage } from 'pages/User/View';
import { Link, Route, Routes } from 'react-router-dom';

const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={<IndexPage />}
    />
    <Route
      path="create"
      element={<CreatePage />}
    />
    <Route
      path="view/:id"
      element={<ViewPage />}
    />
    <Route
      path="update/:id"
      element={<UpdatePage />}
    />
  </Routes>
);

export default AppRouter;
