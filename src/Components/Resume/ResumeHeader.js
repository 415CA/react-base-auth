import React from 'react';
import SocialMedia from '../Social';

const ResumeHeader = () => (
  <>
    <header className='bg-white black-80 tc pv4 avenir'>
      <h1 className='mt2 mb0 baskerville i fw1 f1'>Chris Allen</h1>
      <h2 className='mt2 mb0 f6 fw4 ttu tracked'>Fullstack Software Engineer</h2>
      <SocialMedia />
    </header>
  </>
);

export default ResumeHeader;
