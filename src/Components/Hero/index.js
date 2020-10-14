import React from 'react'
import Social from '../Social'
const Hero = () => {
  const image = 'https://lh3.googleusercontent.com/F9g9yw3GqD9C0agc0wpLOGZinv7j0ejGUz2gR9fkQ3LSCIEt8jZxLyOoVx7t8NG1jZnNlE6frvquieVY0tkt4g_kcNo5urwKPfWlsEEbRbrn0xDAxQbOtCl19lcg3tTUGhDG4c5BkUZU1k4ugrWPL3JMR5XdR-7rkgbVBxF-6LVvJxdG9U8gAPiHxdBBryDeY0HXdEm5_9oYlYnKnFx_xCadD-576qhbtvC2JpT2ulfrnM3YXQFbBA7bvJrDqLYlJxdEuxA_DGD060enTzYOhGJH82fbQKTw1Rr903Lb3kieh9-PgxlNPCWTzuZSkMqAz85fK6qd9baLrs4EeCpndPPhDBCaiBxf96CNkM79kIz9hyEdbyF5cR9w8BgVACDERg8VWUZ9OAceW5zXMhm2Tmj-gmYmXUCV2FL40PBTOqivuajUAMqdLgwpTcHe1EJ2z3RA348zqXEZVd8sXpMraXnr7bzHyMTe-MjDIyCx0qw6GDzZ0tXoJPF0P73s5CyxeExSFGU1fefBCQr5KcCDwHziblQJY13EENu4TyGenMXTcq6xIp5OKEPD9WuVZHl6ujDd6cF5bxSi2w1Wy5VSLZF-aaBJRT67LYGvXsuy6LOaPKS0REZXRSF40BzhH1dR51HdY-v8ESHRMsuL6wvaM8NF6pqAQJ4xynNs7nZNorSeAFw7j3L-VlETG1yuNh8=w2838-h1596-no?authuser=0'
  
  return (
    <article class="athelas">
      <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style={{backgroundImage: `url(${image})`, alignItems: 'center'}}>
        <div class="dtc v-mid">
          <header class="white-100">
            <h2 class="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
            <h3 class="f6 fw1 lh-title">Summer MMXVI</h3>
            <h1 class="f1 f-headline-l fw1 i white-100">Chris Allen</h1>
            <Social />
          </header>
          <h1 class="f1 f-headline-l fw1 i white-100">Chris Allen</h1>
        </div>
      </div>
    </article>
  )
}

export default Hero
