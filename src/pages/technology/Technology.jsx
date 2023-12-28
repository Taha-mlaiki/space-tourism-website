import React, { useState } from 'react'
import "./technology.css"
import Navbar from '../../components/Navbar'
import data from "../../data.json"
const Technology = () => {

    const [techno,setTechno] = useState(data.technology)
    const [number,setNumber] = useState(0)
  return (
    <div className='technology'>
    <Navbar />
    <div className="container-md">
        <div className="row mt-4">
            <div className="col-lg-6 order-2 order-lg-1">
                <div className='content'>
                    <h2><span className='text-white-50 fw-bold me-3'>03</span> SPACE LAUNCH 101 </h2>
                    <div className='d-flex mt-5 flex-column flex-md-row'>
                    <div className='choose me-md-5 flex-row flex-md-column mx-auto'>
                        <span onClick={()=>setNumber(0)} className={`${number === 0?"active":""} mx-3`}>1</span>
                        <span onClick={()=>setNumber(1)} className={`${number === 1?"active":""} mx-3`}>2</span>
                        <span onClick={()=>setNumber(2)} className={`${number === 2?"active":""} mx-3`}>3</span>
                    </div>
                    <div>
                        <p className='mb-4'>THE TERMINOLOGY...</p>
                        <h3 className="name">{techno[number].name}</h3>
                        <p>{techno[number].description}</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <div className='picture'>
                    <img className='' src={`src/${techno[number].images.portrait}`} alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Technology
