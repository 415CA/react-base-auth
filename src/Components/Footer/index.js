import React from 'react';
import { IconContext } from 'react-icons';
import Social from '../Social';

const Footer = () => (
  <>
    <footer className='pa4 pa4 black-70 bt b--black-10'>
      <div className='dt dt--fixed w-100'>
        <div className='dn dtc-ns v-mid'>
          <p className='f7 black-70 dib pr3 mb3'>
            Copyright © Chris Allen 2020
          </p>
        </div>
        <div className='db dtc-ns black-70 tc tr-ns v-mid'>
          <IconContext.Provider
            value={{ color: 'black', className: 'global-class-name', size: '1.5em' }}
          >
            <span className='dib mr4 mr5-ns'><Social /></span>
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
