import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo.png';
import * as ROLES from '../../Constants/roles';
import * as ROUTES from '../../Constants/routes';
import { AuthUserContext } from '../Authentication/Session';
import SignOutButton from '../Authentication/SignOut';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <nav className='db dt-l w-100 border-box pa3 ph5-l'>
    <a
      className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l'
      title='Home'
      href={ROUTES.LANDING}
    >
      <img
        src='http://tachyons.io/img/logo.jpg'
        className='dib w2 h2 br-100'
        alt='Chris Allen'
      />
    </a>
    <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
      <Link
        className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
        to={ROUTES.HOME}
      >
        Home
      </Link>

      <Link
        className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
        to={ROUTES.LANDING}
      >
        Landing
      </Link>
      <Link
        className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
        to={ROUTES.ACCOUNT}
      >
        Account
      </Link>
      {!!authUser.roles[ROLES.ADMIN] && (
      <Link
        className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
        to={ROUTES.ADMIN}
      >
        Admin
      </Link>
      )}
      <SignOutButton />
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <header className='bg-white-70 dt--fixed w-100 ph5-l'>
    <nav className='db dt-l w-100 border-box pa3 ph5-l'>
      <a
        className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l'
        title='Home'
        href={ROUTES.LANDING}
      >
        <img
          src={Logo}
          className='h3 w3 dib'
          alt='Chris Allen'
        />
      </a>
      <div className='db dtc-l v-mid w-100 w-75-l tc tr-l helvetica'>
        <Link
          className='link dim black hover-dark-gray f6 f5-l dib mr3 mr4-l'
          to={ROUTES.LANDING}
        >
          Home
        </Link>
        <Link
          className='link dim black hover-dark-gray f6 f5-l dib mr3 mr4-l'
          to={ROUTES.PROJECTS}
        >
          Projects
        </Link>
        <Link
          className='link dim black hover-dark-gray f6 f5-l dib mr3 mr4-l'
          to={ROUTES.CAMPAIGNS}
        >
          Campaigns
        </Link>
        <Link
          className='link dim black hover-dark-gray f6 f5-l dib mr3 mr4-l'
          to={ROUTES.RESUME}
        >
          Resume
        </Link>
        <Link
          className='link dim black hover-dark-gray f6 f5-l dib mr3 mr4-l'
          to={ROUTES.CONTACT}
        >
          Contact
        </Link>
      </div>
    </nav>
  </header>
);

export default Navigation;
