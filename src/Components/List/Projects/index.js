import React from 'react';

const Projects = () => (
  <>
    <section className='mw7 center'>
      <h2 className='athelas ph3 ph0-l'>Projects</h2>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 athelas mt0 lh-title'>Turismo</h1>
            <p className='f6 f5-l lh-copy athelas'>
              Travel discovery app providing information about
              landmarks, experiences, and restaurants for destinations around the globe
            </p>
            <p className='f6 f5-l lh-copy mv0 athelas'>Tech Stack: JavaScript, Ruby, Rails, React, PostgreSQL, OAuth, HTML, CSS, Material UI</p>
            <br />
            <p className='f6 f5-l lh-copy mv0 athelas'>API: Currents, Google Maps, Michelin Guide, NewsAPI, NY Times Travel, OpenWeatherMap, Unsplash, Yelp Fusion </p>

          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1546530967-21531b891dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' className='db' alt='Rome' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/turismo-frontend' title='GitHub'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8' /></svg>
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://turismo-travel.herokuapp.com' title='Google Chrome Icon'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M16.214 8.69l6.715-1.679A12.027 12.027 0 0 1 24 11.972C24 18.57 18.569 24 11.968 24c-.302 0-.605-.011-.907-.034l4.905-8.347c.356-.376.655-.803.881-1.271a5.451 5.451 0 0 0-.043-4.748 5.156 5.156 0 0 0-.59-.91zm-3.24 8.575l-2.121 6.682C4.738 23.345 0 18.14 0 11.977 0 9.592.709 7.26 2.038 5.279l4.834 8.377c.18.539 1.119 2.581 3.067 3.327.998.382 2.041.481 3.035.282zM11.973 7.62c-2.006.019-3.878 1.544-4.281 3.512a4.478 4.478 0 0 0 1.237 4.032c1.214 1.186 3.14 1.578 4.734.927 1.408-.576 2.47-1.927 2.691-3.431.272-1.856-.788-3.832-2.495-4.629a4.413 4.413 0 0 0-1.886-.411zM7.046 9.962L2.259 4.963A12.043 12.043 0 0 1 11.997 0c4.56 0 8.744 2.592 10.774 6.675H12.558c-1.811-.125-3.288.52-4.265 1.453a5.345 5.345 0 0 0-1.247 1.834z' /></svg>
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 athelas mt0 lh-title'>Mediatrac</h1>
            <p className='f6 f5-l lh-copy athelas'>
              Searchable film database with cast and crew info,
              plot summaries, User reviews, NY Times reviews, and recommendations
            </p>
            <p className='f6 f5-l lh-copy mv0 athelas'>Tech Stack: JavaScript, Ruby, Rails, React.js, PostgreSQL, OAuth, HTML, CSS, Semantic UI</p>
            <br />
            <p className='f6 f5-l lh-copy mv0 athelas'>
              API: The Movie Database
            </p>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80' className='db' alt='theater' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/mediatrac-frontend' title='GitHub'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8' /></svg>
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://mediatrac-app.herokuapp.com/' title='Google Chrome Icon'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M16.214 8.69l6.715-1.679A12.027 12.027 0 0 1 24 11.972C24 18.57 18.569 24 11.968 24c-.302 0-.605-.011-.907-.034l4.905-8.347c.356-.376.655-.803.881-1.271a5.451 5.451 0 0 0-.043-4.748 5.156 5.156 0 0 0-.59-.91zm-3.24 8.575l-2.121 6.682C4.738 23.345 0 18.14 0 11.977 0 9.592.709 7.26 2.038 5.279l4.834 8.377c.18.539 1.119 2.581 3.067 3.327.998.382 2.041.481 3.035.282zM11.973 7.62c-2.006.019-3.878 1.544-4.281 3.512a4.478 4.478 0 0 0 1.237 4.032c1.214 1.186 3.14 1.578 4.734.927 1.408-.576 2.47-1.927 2.691-3.431.272-1.856-.788-3.832-2.495-4.629a4.413 4.413 0 0 0-1.886-.411zM7.046 9.962L2.259 4.963A12.043 12.043 0 0 1 11.997 0c4.56 0 8.744 2.592 10.774 6.675H12.558c-1.811-.125-3.288.52-4.265 1.453a5.345 5.345 0 0 0-1.247 1.834z' /></svg>
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 athelas mt0 lh-title'>Read</h1>
            <p className='f6 f5-l lh-copy athelas'>
              Book cataloging website that allows Users to search for
              titles, generate a personal library, create a list of page annotations
            </p>
            <p className='f6 f5-l lh-copy mv0 athelas'>Tech Stack: JavaScript, Ruby, Rails, PostgreSQL, OAuth, HTML, CSS, Bootstrap UI</p>
            <br />
            <p className='f6 f5-l lh-copy mv0 athelas'>
              API: Google Books
            </p>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80' className='db' alt='library' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/read-frontend' title='GitHub'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8' /></svg>
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://read-js-app.herokuapp.com' title='Google Chrome Icon'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M16.214 8.69l6.715-1.679A12.027 12.027 0 0 1 24 11.972C24 18.57 18.569 24 11.968 24c-.302 0-.605-.011-.907-.034l4.905-8.347c.356-.376.655-.803.881-1.271a5.451 5.451 0 0 0-.043-4.748 5.156 5.156 0 0 0-.59-.91zm-3.24 8.575l-2.121 6.682C4.738 23.345 0 18.14 0 11.977 0 9.592.709 7.26 2.038 5.279l4.834 8.377c.18.539 1.119 2.581 3.067 3.327.998.382 2.041.481 3.035.282zM11.973 7.62c-2.006.019-3.878 1.544-4.281 3.512a4.478 4.478 0 0 0 1.237 4.032c1.214 1.186 3.14 1.578 4.734.927 1.408-.576 2.47-1.927 2.691-3.431.272-1.856-.788-3.832-2.495-4.629a4.413 4.413 0 0 0-1.886-.411zM7.046 9.962L2.259 4.963A12.043 12.043 0 0 1 11.997 0c4.56 0 8.744 2.592 10.774 6.675H12.558c-1.811-.125-3.288.52-4.265 1.453a5.345 5.345 0 0 0-1.247 1.834z' /></svg>
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 athelas mt0 lh-title'>Session</h1>
            <p className='f6 f5-l lh-copy athelas'>
              A skateboard app that helps you find
              the best skate spots, parks, and shops in your area
            </p>
            <p className='f6 f5-l lh-copy mv0 athelas'>Tech Stack: Ruby, Rails, PostgreSQL, JWT Auth, HTML, CSS, Web Scraping</p>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns'>
            <img src='https://images.unsplash.com/photo-1536318431364-5cc762cfc8ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' className='db' alt='skateboard' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/session' title='GitHub'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8' /></svg>
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-red inline-flex items-center ma2 tc br2 pa2' href='https://session-nyc.herokuapp.com/' title='Google Chrome Icon'>
                <svg className='dib h2 w2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'><path d='M16.214 8.69l6.715-1.679A12.027 12.027 0 0 1 24 11.972C24 18.57 18.569 24 11.968 24c-.302 0-.605-.011-.907-.034l4.905-8.347c.356-.376.655-.803.881-1.271a5.451 5.451 0 0 0-.043-4.748 5.156 5.156 0 0 0-.59-.91zm-3.24 8.575l-2.121 6.682C4.738 23.345 0 18.14 0 11.977 0 9.592.709 7.26 2.038 5.279l4.834 8.377c.18.539 1.119 2.581 3.067 3.327.998.382 2.041.481 3.035.282zM11.973 7.62c-2.006.019-3.878 1.544-4.281 3.512a4.478 4.478 0 0 0 1.237 4.032c1.214 1.186 3.14 1.578 4.734.927 1.408-.576 2.47-1.927 2.691-3.431.272-1.856-.788-3.832-2.495-4.629a4.413 4.413 0 0 0-1.886-.411zM7.046 9.962L2.259 4.963A12.043 12.043 0 0 1 11.997 0c4.56 0 8.744 2.592 10.774 6.675H12.558c-1.811-.125-3.288.52-4.265 1.453a5.345 5.345 0 0 0-1.247 1.834z' /></svg>
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Projects;
