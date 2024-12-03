import React from 'react'
import SimpleCarousel from './SimpleCrousel'
import VideoPlayer from './VideoPlayer'
import tomato from "../images/tomato.webp"
import marigold from "../images/marigold.webp"
import brinjal from "../images/brinjal2.webp"
import chilli from "../images/chilli.webp"
import tarbuj from "../images/tarbuj.webp"
import gobi from "../images/gobi2.webp"



const Home = () => {
  return (
      <div className='p-1'>
        <SimpleCarousel/>
        <div className="grid grid-cols-2 md:grid-cols-3 m-1 p-2 gap-2 md:m-6 bg-[#9ed1a6] rounded-lg md:p-3">
          <div className="h-[180px] md:h-[300px] bg-white rounded-lg shadow-lg">
            <img className="h-full w-full rounded-lg" src={tomato} alt="" srcset="" />
          </div>
          <div className="h-[180px] md:h-[300px] bg-white rounded-lg shadow-lg">
            <img className="h-full w-full rounded-lg" src={marigold} alt="" srcset="" />
          </div>
          <div className="h-[180px] md:h-[300px] bg-white rounded-lg shadow-lg">
            <img className="h-full w-full rounded-lg" src={brinjal} alt="" srcset="" />
          </div>
          <div className="h-[180px] md:h-[300px] bg-white rounded-lg shadow-lg">
            <img className="h-full w-full rounded-lg" src={chilli} alt="" srcset="" />
          </div>
          <div className="h-[180px] md:h-[300px] bg-white rounded-lg shadow-lg">
            <img className="h-full w-full rounded-lg" src={gobi} alt="" srcset="" />
          </div>
          <div className="h-[180px] md:h-[300px] bg-white rounded-lg shadow-lg">
            <img className="h-full w-full rounded-lg" src={tarbuj} alt="" srcset="" />
          </div>
        </div>
        <VideoPlayer />
        
      
      </div>
  )
}

export default Home