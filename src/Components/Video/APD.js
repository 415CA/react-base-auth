import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const APDVideo = () => {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      arrows: true,
    };

  return (
    <Fragment>
      <Slider {...settings}>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/389025248"
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Logan"
          ></iframe>
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/389025436"
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Kingsmen"
          ></iframe>
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/389025561"
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Alita"
          ></iframe>
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/389025561"
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Alita"
          ></iframe>
        </Fragment>
      </Slider>
    </Fragment>
  );
};

export default APDVideo;
