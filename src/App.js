import { Routes, Route } from 'react-router-dom';

import {
  Authentication,
  Checkout,
  Home,
  SharedLayout,
  ErrorPage,
} from './routes';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<SharedLayout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='checkout'
          element={<Checkout />}
        />
        <Route
          path='authentication'
          element={<Authentication />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
