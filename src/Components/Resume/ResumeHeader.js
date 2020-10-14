import React, { Fragment } from 'react';
import SocialMedia from '../Social'

const ResumeHeader = () => {
  return (
    <Fragment>
      <header className="bg-white black-80 tc pv4 avenir">
        <h1 className="mt2 mb0 baskerville i fw1 f1">Chris Allen</h1>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">Fullstack Software Engineer</h2>
        <SocialMedia />
      </header>
    </Fragment>
  );
};

export default ResumeHeader;
