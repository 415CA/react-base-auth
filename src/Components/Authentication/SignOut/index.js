import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../Constants/routes';


const SignOutButton = ({ firebase }) => (

  <Link
    className="f6 link dim br1 ba ph3 pv2 mb2 dib black"
    to={ROUTES.LANDING}
    onClick={firebase.doSignOut}
  >
    Sign Out
  </Link>
);

export default withFirebase(SignOutButton);
