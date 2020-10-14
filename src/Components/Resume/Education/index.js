import React, { Fragment } from 'react';

const Education = () => {
  return (
    <Fragment>
      <article className="cf ph3 ph5-ns pv5">
        <header className="fn fl-ns w-50-ns pr4-ns">
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">Education</h1>
        </header>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure mt0-ns">
            <b>Flatiron School</b> Brooklyn, NY<br></br>
            Software Engineering Immersive Program<br></br>
            NYC Web Development Fellowship
          </p>
          <p className="f5 lh-copy measure mt0-ns">
            <b>Academy of Art University</b> San Francisco, CA<br></br>
            Motion Pictures and Television, Editing
          </p>
          <p className="f5 lh-copy measure mt0-ns">
            <b>Syracuse University</b> Syracuse, NY<br></br>
            Political Science
          </p>
        </div>
      </article>
    </Fragment>
  );
};

export default Education;
