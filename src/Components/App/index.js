import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import AboutPage from '../../Pages/About';
import ContactPage from '../../Pages/Contact';
import Campaigns from '../../Pages/DemoReel';
import HomePage from '../../Pages/Home';
import LandingPage from '../../Pages/Landing';
import NoMatchPage from '../../Pages/NoMatch';
import ResumePage from '../../Pages/Resume';
import ProjectsPage from '../../Pages/Projects';
import WorkPage from '../../Pages/Work';
import AccountPage from '../Authentication/Account';
import AdminPage from '../Authentication/Admin';
import PasswordForgetPage from '../Authentication/PasswordForget';
import { withAuthentication } from '../Authentication/Session';
import SignInPage from '../Authentication/SignIn';
import SignUpPage from '../Authentication/SignUp';
import Footer from '../Footer';
import Navigation from '../Navigation';

const NoMatch = () => (
  <>
    <NoMatchPage />
  </>
);

const App = () => (
  <Router>
    <>
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
        <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />
        <Route exact path={ROUTES.WORK} component={WorkPage} />
        <Route exact path={ROUTES.CONTACT} component={ContactPage} />
        <Route exact path={ROUTES.RESUME} component={ResumePage} />
        <Route exact path={ROUTES.CAMPAIGNS} component={Campaigns} />
        <Route path='*' component={NoMatch} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default withAuthentication(App);
