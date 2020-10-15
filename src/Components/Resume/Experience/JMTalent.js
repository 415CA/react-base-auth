import React from 'react';

const JMTalent = () => (
  <>
    <article className='cf ph3 ph5-ns pv5'>
      <header className='fn fl-ns w-50-ns pr4-ns'>
        <h1 className='f2 lh-title fw9 mb3 mt0 pt3 bt bw2'>
          Jason Marks Talent Management
        </h1>
        <h2 className='f3 mid-gray lh-title'>
          Director, West Coast Operations
        </h2>
        <time className='f6 ttu tracked gray'>
          Los Angeles, CA | February 2010 – December 2014
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <p className='f5 lh-copy measure mt0-ns'>
          Managed operations, client services, sales, and business development
          for West Coast accounts and talent. Established cross-functional
          relationships with vendors, talent, advertising agencies, and media
          networks. Designed strategic business plans which resulted in
          increasing bookings and artist exposure in New York, Los Angeles,
          and London markets. Led international and domestic brand marketing
          and public relations initiatives. Managed operations and streamlined
          workflow between NY and LA offices while supervising a staff of
          eight direct reports.
        </p>
        <p className='f5 lh-copy measure'>
          <b>Notable Clients:</b>
          {' '}
          21st Century Fox, Disney, Marvel, Netflix,
          Paramount, Sony, Universal, Warner Bros, ABC, CBS, FOX, FX, NBC
          <br />
          <br />
          <b>Notable Campaigns:</b>
          {' '}
          Avatar, The Avengers, Captain America, The
          Dark Knight Rises, Django Unchained, Godzilla, Gravity, The Hobbit,
          Inception, Star Trek: Into Darkness, Thor, and Wolf of Wall Street
        </p>
      </div>
    </article>
  </>
);

export default JMTalent;
