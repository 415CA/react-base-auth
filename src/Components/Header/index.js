import React, { Fragment } from 'react'
import Social from '../Social'

const Header = () => {
  const image = 'https://lh3.googleusercontent.com/F9g9yw3GqD9C0agc0wpLOGZinv7j0ejGUz2gR9fkQ3LSCIEt8jZxLyOoVx7t8NG1jZnNlE6frvquieVY0tkt4g_kcNo5urwKPfWlsEEbRbrn0xDAxQbOtCl19lcg3tTUGhDG4c5BkUZU1k4ugrWPL3JMR5XdR-7rkgbVBxF-6LVvJxdG9U8gAPiHxdBBryDeY0HXdEm5_9oYlYnKnFx_xCadD-576qhbtvC2JpT2ulfrnM3YXQFbBA7bvJrDqLYlJxdEuxA_DGD060enTzYOhGJH82fbQKTw1Rr903Lb3kieh9-PgxlNPCWTzuZSkMqAz85fK6qd9baLrs4EeCpndPPhDBCaiBxf96CNkM79kIz9hyEdbyF5cR9w8BgVACDERg8VWUZ9OAceW5zXMhm2Tmj-gmYmXUCV2FL40PBTOqivuajUAMqdLgwpTcHe1EJ2z3RA348zqXEZVd8sXpMraXnr7bzHyMTe-MjDIyCx0qw6GDzZ0tXoJPF0P73s5CyxeExSFGU1fefBCQr5KcCDwHziblQJY13EENu4TyGenMXTcq6xIp5OKEPD9WuVZHl6ujDd6cF5bxSi2w1Wy5VSLZF-aaBJRT67LYGvXsuy6LOaPKS0REZXRSF40BzhH1dR51HdY-v8ESHRMsuL6wvaM8NF6pqAQJ4xynNs7nZNorSeAFw7j3L-VlETG1yuNh8=w2838-h1596-no?authuser=0'
  
  return (
    <Fragment>
      <header className="sans-serif">
        <div className="cover bg-left bg-center-l" style={{backgroundImage: `url(${image}`}}>
          <div className="bg-black-20 pb5 pb6-m pb7-l">
            <nav className="dt w-100 mw8 center"> 
            </nav> 
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Chris Allen</h1>
              <h2 className="fw1 f3 white-80 mt3 mb4">Full Stack Web Developer</h2>
              <h2 className="fw1 f3 white-80 mt3 mb4"><Social /></h2>
              {/* <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
              <span className="dib v-mid ph3 white-70 mb3">or</span>
              <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/">Secondary call to action</a> */}
            </div>
          </div>
        </div> 
      </header>
    </Fragment>
  )
}

export default Header
