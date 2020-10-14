import React, { Fragment } from 'react';
import ProExperience from './ProExperience';
import ResumeHeader from './ResumeHeader'
import Education from './Education'
import Technical from './Technical'

const Resume = () => {
  return (
    <Fragment>
      <ResumeHeader />
      <Technical />
      <ProExperience />
      <Education />
    </Fragment>
  );
};

export default Resume;
