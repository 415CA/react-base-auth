import React from 'react';
import { Embed, Modal } from 'semantic-ui-react';

const exampleReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer };
    case 'CLOSE_MODAL':
      return { open: false };
    default:
      throw new Error();
  }
};

const VideoModal = (film) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    <>
      <div className='fl w-50 w-25-l link overflow-hidden'>
        <div
          onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
          role='img'
          aria-label='Primer movie'
          className='grow aspect-ratio--4x6 '
          style={{
            backgroundImage: `url(${film.poster})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
          }}
        />
      </div>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Content>
          <Embed
            id={film.video}
            placeholder={`${film.backdrop}`}
            source='vimeo'
            size='large'
            hd
          />
        </Modal.Content>
      </Modal>
    </>
  );
};

export default VideoModal;
