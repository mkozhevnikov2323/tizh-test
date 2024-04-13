import { Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppContainer } from 'widgets/Container';

export function App() {
  return (
    <div className="app">
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </div>
  );
}
