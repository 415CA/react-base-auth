import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
} from 'react-icons/ai';

const Social = () => (
  <>
    <a href='https://github.com/415CA'>
      <AiFillGithub />
    </a>
    <a href='https://www.linkedin.com/in/chrisallen415/'>
      <AiFillLinkedin />
    </a>
    <a href='https://medium.com/@chrisallen415'>
      <AiOutlineMedium />
    </a>
    <a href='mailto:chrisallen415@gmail.com'>
      <AiOutlineMail />
    </a>
  </>
);

export default Social;
