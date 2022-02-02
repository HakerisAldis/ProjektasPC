import React from 'react';
import withUserLogedOut from '../../HOC\'s/withUserLogedOut';
import { ROUTES } from '../../routes';

const Tickets = () => {
  return (
    <div>
            Bilietai
    </div>
  );
};

export default withUserLogedOut(Tickets, ROUTES.LOGIN);
