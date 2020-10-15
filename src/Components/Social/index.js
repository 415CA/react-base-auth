import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineMedium,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaVimeoV } from 'react-icons/fa';

const Social = () => (
  <>
    <a href='https://github.com/415CA'>
      <AiFillGithub />
    </a>
    <a href='https://www.linkedin.com/in/chrisallen415/'>
      <AiFillLinkedin />
    </a>
    <a href='https://www.instagram.com/415CA/'>
      <AiOutlineInstagram />
    </a>
    <a href='https://twitter.com/415ca'>
      <AiOutlineTwitter />
    </a>
    <a href='https://vimeo.com/chrisallen415'>
      <FaVimeoV />
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
