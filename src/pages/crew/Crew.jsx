import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import "./crew.css"
import data from "../../data.json"
import backgroundImg from "../../assets/crew/background-crew-desktop.jpg"
const Crew = () => {
    const [crew,setCrew] = useState(data.crew);

    const [theCrew,setTheCrew] = useState(0);
console.log(crew)
  return (
    <div className='crew'>
      <Navbar />
      <div className="container-lg">
        <div className='crew-content mt-4 d-flex flex-column flex-md-row'>
            <div>
                <h3><span>02</span> MEET YOUR CREW</h3>
                <h2 className='rol'>{crew[theCrew].role}</h2>
                <p className='name'>{crew[theCrew].name}</p>
                <p className='bio'>{crew[theCrew].bio}</p>
                <div className='choose d-flex my-4 justify-content-center'>
                    {crew.map((cr,index)=> <span key={cr.id} onClick={()=>setTheCrew(index)} className={theCrew === index ? "active":""}></span>)}
                </div>
            </div>
            <div className='picture'>
                <img src={`/src/${crew[theCrew].images.png}`} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
