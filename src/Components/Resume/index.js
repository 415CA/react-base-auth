import React from 'react';
import Education from './Education';
import ProExperience from './ProExperience';
import ResumeHeader from './ResumeHeader';
import Technical from './Technical';

const Resume = () => (
  <>
    <ResumeHeader />
    <Technical />
    <ProExperience />
    <Education />
  </>
);

export default Resume;
