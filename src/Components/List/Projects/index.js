import React from 'react';

const Projects = () => (
  <section className='mw7 center avenir'>
    <h2 className='baskerville fw1 ph3 ph0-l'>Projects</h2>
    <article className='bt bb b--black-10'>
      <a className='db pv4 ph3 ph0-l no-underline black dim' href='https://github.com/415CA/turismo-frontend'>
        <div className='flex flex-column flex-row-ns'>
          <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1597078768979-00eb86c9871a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' className='db' alt='Rome' />
          </div>
          <div className='w-100 w-60-ns pl3-ns'>
            <h1 className='f3 fw1 baskerville mt0 lh-title'>Turismo</h1>
            <p className='f6 f5-l lh-copy'>
              Travel discovery app providing information about
              landmarks, experiences, and restaurants for destinations around the globe
            </p>
            <p className='f6 lh-copy mv0'>By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
    <article className='bb b--black-10'>
      <a className='db pv4 ph3 ph0-l no-underline black dim' href='https://github.com/415CA/mediatrac-frontend'>
        <div className='flex flex-column flex-row-ns'>
          <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80' className='db' alt='theater' />
          </div>
          <div className='w-100 w-60-ns pl3-ns'>
            <h1 className='f3 fw1 baskerville mt0 lh-title'>Mediatrac</h1>
            <p className='f6 f5-l lh-copy'>
              Searchable film database with cast and crew info,
              plot summaries, User reviews, NY Times reviews, and recommendations
            </p>
            <p className='f6 lh-copy mv0'>By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
    <article className='bb b--black-10'>
      <a className='db pv4 ph3 ph0-l no-underline black dim' href='https://github.com/415CA/read-frontend'>
        <div className='flex flex-column flex-row-ns'>
          <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80' className='db' alt='library' />
          </div>
          <div className='w-100 w-60-ns pl3-ns'>
            <h1 className='f3 fw1 baskerville mt0 lh-title'>Read</h1>
            <p className='f6 f5-l lh-copy'>
              Book cataloging website that allows Users to search for
              titles, generate a personal library, create a list of page annotations
            </p>
            <p className='f6 lh-copy mv0'>By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
    <article className='bb b--black-10'>
      <a className='db pv4 ph3 ph0-l no-underline black dim' href='https://github.com/415CA/session'>
        <div className='flex flex-column flex-row-ns'>
          <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1536318431364-5cc762cfc8ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' className='db' alt='skateboard' />
          </div>
          <div className='w-100 w-60-ns pl3-ns'>
            <h1 className='f3 fw1 baskerville mt0 lh-title'>Session</h1>
            <p className='f6 f5-l lh-copy'>
              A skateboard app that helps you find
              the best skate spots, parks, and shops in your area
            </p>
            <p className='f6 lh-copy mv0'>By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
  </section>

);

export default Projects;