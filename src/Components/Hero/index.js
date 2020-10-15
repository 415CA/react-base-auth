import React from 'react';
import Social from '../Social';

const Hero = () => {
  const image = 'https://lh3.googleusercontent.com/-Ky5C-oWxo9vp_gLRtTyq657vLSaeWt-TC-CxTocR6b9pL3DZdTyB-nW0lFJETSv12om8DnI7IyxBOT1rJTzzi0kPZYD9M2Kk8kBZUduZUJrt8icmBW-eP2I_0UmF8yOrrZm80AobgDe0WapcMW9tpcUVI9wldCMnjW85pe-oea-qFyowSJNYK5h7bZAP9VbAkMsyU07rH0CbH7E_rzFvO7EZGA3_jDdaTFVRFT7CUD9eTuGyp6KsYag1-Or2LsGyN3a8Sqh7G2WICJtYVSmvgZj01M2s_ehM6MfXSXq4mLAUePgIsDrPc-NgY77Fb5bt1HMwJKJCVVlPhjgxJHPyMtVyx8X0LHJ9d2ENgQG9RZrHTrzanJAB421Uw7TeTYgSZgRNoXm9CDFtQpRdk69Ky46u3IklpmON2DUzjh8Fi3Nvqk0fUOw4VHrIYyavYijsvL_lIoQO0emfsKAT6fSTz5Co_Zxz2lAW8afw_G2_8YrkVOZZBj3T7yRBRf35J91cET6kqE_OQ-4kyJKm_REE83UO36ap6K3rwG14cCmhX9a9WQ4xX8CCSsn8sh1dMLGIlCyqklQG-tjUX87sKqanWRxPjJFLWzlBMSoio_U9sbUAcC80CPsGQ8bN4eBiioU8qBx3WOHo62XnmIujFdB2SRCaNfJDN9q3PUipXQnB6ZVi-o2kUfMsEnsqLKnOv8=w2838-h1596-no?authuser=0';

  return (
    <div className='athelas'>
      <div className='vh-100 dt w-100 tc bg-white cover' style={{ background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className='dtc v-mid bg-black-30 '>
          <h1 className='f1 f-headline-l fw1 white'>Chris Allen</h1>
          <blockquote className='ph0 mh0 measure f4 lh-copy center'>
            <h1 className='f2 fw1 white'>
              Full Stack Web Developer
            </h1>
            <h4 className=' f4 fw1 white'>
              Entertainment Marketing | Media Licensing | Business Development
            </h4>
            <h4 className='f3 ttu tracked fs-normal'><Social /></h4>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hero;
