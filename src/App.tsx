import { Routes, Route } from 'react-router-dom';
import Login from 'ui/screen/Login';
import Home from 'ui/screen/Home';
import { ROUTES } from 'constants/routes';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN.path} element={<Login />} />
      <Route path={ROUTES.ROOM.path} element={<Home />}>
        <Route path={ROUTES.ROOM_ID.path} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
