import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../../Pages/Landing';
import SignUpPage from '../Authentication/SignUp';
import SignInPage from '../Authentication/SignIn';
import PasswordForgetPage from '../Authentication/PasswordForget';
import HomePage from '../../Pages/Home';
import AccountPage from '../Authentication/Account';
import AdminPage from '../Authentication/Admin';
import NoMatchPage from '../../Pages/NoMatch'
import ContactPage from '../../Pages/Contact'
import AboutPage from '../../Pages/About'
import WebPage from '../../Pages/Web'
import WorkPage from '../../Pages/Work'
import ResumePage from '../../Pages/Resume'
import DemoReel from '../../Pages/DemoReel'
import Footer from '../Footer'


import * as ROUTES from '../../Constants/routes';
import { withAuthentication } from '../Authentication/Session';

const NoMatch = () => {
  return (
    <Fragment>
      <NoMatchPage />
    </Fragment>
  );
}

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          <Route exact path={ROUTES.ABOUT} component={AboutPage} />
          <Route exact path={ROUTES.WEB} component={WebPage} />
          <Route exact path={ROUTES.WORK} component={WorkPage} />
          <Route exact path={ROUTES.CONTACT} component={ContactPage} />
          <Route exact path={ROUTES.RESUME} component={ResumePage} />
          <Route exact path={ROUTES.FILM} component={DemoReel} />
          <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default withAuthentication(App);
