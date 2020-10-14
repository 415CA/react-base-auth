import React, {Fragment} from 'react'
import { Films } from '../../../Media'
import VideoModal from '../Modal/index'

const Posters = () => {

  return (
    <Fragment>
      { Films.map( film => { 
        return (
          <VideoModal key={film.name} poster={film.poster} video={film.video} backdrop={film.backdrop} />
        )
      })}
    </Fragment>
  )
}

export default Posters
