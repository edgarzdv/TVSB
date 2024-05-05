import React from 'react'

import style from './style.module.scss';


const Home = () => {
  return (
    <div className={style.homeContainer}>
      {/* Cool background animation */}
      <div className={style.background}></div>

      {/* Content */}
      <div className={style.content}>
        <h1>Welcome to My Website</h1>
        <p>Discover amazing content and explore new opportunities.</p>
      </div>
    </div>
  )
}

export default Home