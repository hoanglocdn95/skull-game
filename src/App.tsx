import { Routes, Route } from 'react-router-dom';
import Login from 'ui/screen/Login';
import Home from 'ui/screen/Home';
import { ROUTES } from 'constants/routes';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN.path} element={<Login />}>
        <Route index element={<Login />} />
        <Route path={ROUTES.HOME.path} element={<Home />}>
          <Route path={ROUTES.HOME_ID.path} element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
