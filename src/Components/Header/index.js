import React, { Fragment } from 'react'
import Social from '../Social'

const Header = () => {
  const image = 'https://lh3.googleusercontent.com/F9g9yw3GqD9C0agc0wpLOGZinv7j0ejGUz2gR9fkQ3LSCIEt8jZxLyOoVx7t8NG1jZnNlE6frvquieVY0tkt4g_kcNo5urwKPfWlsEEbRbrn0xDAxQbOtCl19lcg3tTUGhDG4c5BkUZU1k4ugrWPL3JMR5XdR-7rkgbVBxF-6LVvJxdG9U8gAPiHxdBBryDeY0HXdEm5_9oYlYnKnFx_xCadD-576qhbtvC2JpT2ulfrnM3YXQFbBA7bvJrDqLYlJxdEuxA_DGD060enTzYOhGJH82fbQKTw1Rr903Lb3kieh9-PgxlNPCWTzuZSkMqAz85fK6qd9baLrs4EeCpndPPhDBCaiBxf96CNkM79kIz9hyEdbyF5cR9w8BgVACDERg8VWUZ9OAceW5zXMhm2Tmj-gmYmXUCV2FL40PBTOqivuajUAMqdLgwpTcHe1EJ2z3RA348zqXEZVd8sXpMraXnr7bzHyMTe-MjDIyCx0qw6GDzZ0tXoJPF0P73s5CyxeExSFGU1fefBCQr5KcCDwHziblQJY13EENu4TyGenMXTcq6xIp5OKEPD9WuVZHl6ujDd6cF5bxSi2w1Wy5VSLZF-aaBJRT67LYGvXsuy6LOaPKS0REZXRSF40BzhH1dR51HdY-v8ESHRMsuL6wvaM8NF6pqAQJ4xynNs7nZNorSeAFw7j3L-VlETG1yuNh8=w2838-h1596-no?authuser=0'
  
  return (

    <Fragment>
      <article className="athelas">
        <div className="vh-100 dt w-100 tc bg-dark-gray white cover" style={{background:`url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
          <div className="dtc v-mid">
            <header className="white">
              <h1 className="f2 f-headline-l fw1 i white">Chris Allen</h1>
            </header>
              <Social />
              <h3 className="f4 fw1 ttu tracked mb2 lh-title">Full Stack Web Developer</h3>
              <h3 className="f4 fw1 ttu tracked mb2 lh-title">Entertainment Marketing | Media Licensing | Business Development</h3>
          </div>
        </div>
      </article>
    </Fragment>
  )
}

export default Header
