import React from 'react';
import Social from '../Social';

const Footer = () => (
  <>
    <footer className='ph4 black-70 bt b--black-10'>
      <div className='dt dt--fixed w-100'>
        <div className='dn dtc-ns v-mid'>
          <p className='ph4 f7 black-70 dib pr3 mb3'>
            Copyright © Chris Allen
          </p>
        </div>
        <div className='fr'>
          <Social color='#000000' size={30} />
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
