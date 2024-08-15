import React from 'react'
import "./Style.scss"
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popularr from './popular/Popularr';
import TopRated from './topRated/TopRated';
const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
      <Popularr/>
      <TopRated/>
      {/* <div style={{ height:1000}}></div> */}
    </div>
  )
}

export default Home
