import React, { Fragment } from 'react'
import Social from '../../Components/Social'

const Contact = () => {
  const image = 'https://lh3.googleusercontent.com/Hi34vE4h0SvYiX0Alg88LShvetgRJ7oCW6FA3dCxrqoOLHpT-vEqcHQ9Qn0fvDRDYUXtMCKA_S6qN1GpcFBVVetfgQc4TmjFLBDb5sfl7yNLShjeGiOUAqJhXaFeh58jYcKfM7B998wQ1HwQ2A8nZ3F79nFUVnktPXpDYAdP7-1osaSuj7Ofkax-RNJ49oKxHf3mtNm-SWuEFqpIF3v_aOidVAEoGBsQRYFvIdPZerFcKYseNaIDUECfYav0W2yWA4VmaG8nZ2nv6sPAzVe7aVJpwjbmcHFw1NjCHPYkAjTaAAWX1Gix1a69dSoKLN2EgZDldoWOhcaTmrLO9M6odHagkFAuc3pWf3taVnfYIJRPlcb-D8Dm9OaZ8FRsFqt98wCxcXNny0OMdv89tQK1Vyl_15RC4bnAFOB4nE1q4WQd3p9pAGChUr0tTpSZvYSxT06Endwk4ZDW7qld-Y2IEoUxdCRtKicAA0Po99a4nXxnt1VegCRKfvonf3h4xp8dcHDj9SatcmFgr-9d0D84nNXGgCPiNqmK7EBgYSNALpuZjACHTf2EWV7jAghz0OYF1jHjkkmTd41qo9DrcuKd_D27o9BvlR6uH-0XTOKw8PoKXksaM0khNaZMfzs9vZQjmPsuO85TSzfFJjz00L0XEcwseF-Kjp1rOujFQuz984dlRtjCR3w_qqqyw8Wj2yU=w2836-h1596-no?authuser=0'
  
  return (

    <Fragment>
      <div className="athelas">
        <div className="vh-100 dt w-100 tc bg-dark-gray white cover" style={{background:`url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
          <div className="dtc v-high">
            <header className="white">
              <h1 className="f1 f-headline-l fw1 i white">Chris Allen</h1>
              <Social />
              <h3 className="f4 fw1 ttu tracked mb2 lh-title">Full Stack Web Developer</h3>
              <h3 className="f4 fw1 ttu tracked mb2 lh-title">Entertainment Marketing | Media Licensing | Business Development</h3>
              <h3 className="f4 fw1 ttu tracked mb2 lh-title">chrisallen415@gmail.com</h3>
            </header>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
