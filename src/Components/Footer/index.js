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
        <div className='db dtc-ns black-70 tc tr-ns v-mid'>
          <span className='dib mr4 mr5-ns'><Social color='#000000' size={30} /></span>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
