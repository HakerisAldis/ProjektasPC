import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tracks from '../pages/Tracks';
import Tickets from '../pages/Tickets';
import { ROUTES } from '.';
import PropTypes from 'prop-types';
import GearSelect from '../pages/GearSelect';
import Gear from '../pages/Gear';

function Router ({ children }) {
  return (
    <BrowserRouter>
      { children }
      <Routes>
        <Route exact path={ROUTES.DEFAULT} element={<Main />} />
        <Route path={ROUTES.GEARSELECT} element={<GearSelect />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.TRACKS} element={<Tracks />} />
        <Route path={ROUTES.TICKETS} element={<Tickets />} />
        <Route path={ROUTES.GEAR} element={<Gear />} />
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.element.isRequired
};

export default Router;
