import React from 'react';
import Landing from '../../Assets/Images/Landing.jpg';
import Social from '../Social';

const Hero = () => (
  <div className='athelas'>
    <div className='vh-100 dt w-100 tc bg-white cover' style={{ background: `url(${Landing})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className='dtc v-mid bg-black-50'>
        <h1 className='f1 f-headline-l fw1 white'>Chris Allen</h1>
        <blockquote className='ph0 mh0 measure f4 lh-copy center'>
          <h1 className='f2 fw1 white'>
            Full Stack Web Developer
          </h1>
          <h4 className=' f4 fw1 white'>
            Entertainment Marketing | Media Licensing | Business Development
          </h4>
          <h4 className='f3 ttu tracked fs-normal'><Social color='#FFFFFF' size={50} /></h4>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Hero;
