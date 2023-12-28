import React from 'react'
import "./home.css"
import Navbar from "../../components/Navbar"
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="landing">
      <div className=" container d-flex mt-5">
        <div className='space'>
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h2>SPACE</h2>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='ex d-flex justify-content-center align-items-center'>
          <div className='explore'>
            <span>EXPLORE</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
