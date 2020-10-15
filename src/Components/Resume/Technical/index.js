import React from 'react';
import {
  DiCss3, DiHtml5, DiJavascript1,

  DiReact, DiRuby,

  DiSqllite,
} from 'react-icons/di';
import { FaGit, FaSalesforce } from 'react-icons/fa';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremiere, SiBootstrap,

  SiCanva, SiFirebase, SiGithub,

  SiGoogleads,
  SiGoogleanalytics,
  SiHootsuite, SiMaterialUi,

  SiMicrosoftexcel,

  SiMicrosoftoffice,
  SiMicrosoftpowerpoint, SiMicrosoftword, SiMysql, SiPostgresql, SiPostman, SiRails, SiRedux,

  SiWordpress,
} from 'react-icons/si';

const Technical = () => (
  <>
    <article className='cf ph3 ph5-ns pv5'>
      <header className='fn fl-ns w-50-ns pr4-ns'>
        <h1 className='f2 lh-title fw9 mb3 mt0 pt3 bt bw2'>
          Technical Skills
        </h1>
        <h2 className='f3 mid-gray lh-title'>Subheader</h2>
        <time className='f6 ttu tracked gray'>Date & Time</time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Programming Languages</b>
          <DiJavascript1 />
          <DiRuby />
          <DiHtml5 />
          <DiCss3 />
        </p>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Libraries/Frameworks</b>
          <DiReact />
          <SiRedux />
          <SiRails />
          <SiBootstrap />
          <SiMaterialUi />
          <SiWordpress />
          <SiPostman />
        </p>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Architecture</b>
          ActiveRecord, Agile Methodology, ES6, JSON, JWT, MVC, REST API,
          OAuth
        </p>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Version Control</b>
          <FaGit />
          <SiGithub />
        </p>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Database</b>
          <SiPostgresql />
          <DiSqllite />
          <SiMysql />
          <SiFirebase />
        </p>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Marketing & Design</b>
          <SiAdobeillustrator />
          <SiAdobephotoshop />
          <SiAdobepremiere />
          <SiCanva />
          <SiGoogleads />
          <SiGoogleanalytics />
          <SiHootsuite />
        </p>
        <p className='f5 lh-copy measure mt0-ns'>
          <b>Administration</b>
          <SiMicrosoftexcel />
          <SiMicrosoftword />
          <SiMicrosoftoffice />
          <SiMicrosoftpowerpoint />
          <FaSalesforce />
        </p>
      </div>
    </article>
  </>
);

export default Technical;
