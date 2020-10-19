import React from 'react';
import { IconContext } from 'react-icons';
import Education from './Education';
import ProExperience from './ProExperience';
import ResumeHeader from './ResumeHeader';
import Technical from './Technical';

const Resume = () => (
  <>
    <ResumeHeader />
    <IconContext.Provider
      value={{ color: 'black', className: 'global-class-name', size: '2em' }}
    >
      <Technical />
    </IconContext.Provider>
    <ProExperience />
    <Education />
  </>
);

export default Resume;
