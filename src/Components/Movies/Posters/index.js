import React from 'react';
import Films from '../../../Media';
import VideoModal from '../Modal/index';

const Posters = () => (
  <>
    { Films.map((film) => (
      <VideoModal
        key={film.name}
        poster={film.poster}
        video={film.video}
        backdrop={film.backdrop}
      />
    ))}
  </>
);

export default Posters;
