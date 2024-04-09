import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

export function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  );
}
