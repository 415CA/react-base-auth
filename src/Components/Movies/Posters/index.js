import React, {Fragment} from 'react'
import { Posters } from '../../../Images/'

const PosterWall = () => {
  return (
    <Fragment>
      <article>
        {
          Posters.map( poster => {
            return (
            <a href="/" className="fl w-50 w-25-l link overflow-hidden">
              <div role="img" aria-label="Primer movie" className="grow aspect-ratio--4x6 " style={{backgroundImage: `url(${poster})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
            </a>
            )
          })
        }
    </article>

    </Fragment>
  )
}

export default PosterWall
