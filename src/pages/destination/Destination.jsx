import React, { useRef, useState } from 'react'
import "./destination.css"
import Navbar from "../../components/Navbar"
import data from "../../data.json"

const Destination = () => {
   
    const [destination,setDestination] = useState(data.destinations);
   console.log(destination)
    const [count,setCount] = useState(0)
    return (
        <div className='destination'>
            <Navbar />
            <div className='container-lg mt-4 d-flex gap-3 flex-column flex-md-row'>
                <div className='pick d-flex flex-column align-items-cener '>
                    <h2><span>01</span>PICK YOUR DESTINATION</h2>
                    <img  src={`/src/${destination[count].images.png}`} alt="" />
                </div>
                <div className='info'>
                    <ul className='d-flex'>
                        <li onClick={()=> setCount(0)} className={count === 0 ? "active":""}>MOON</li>
                        <li onClick={()=> setCount(1)} className={count === 1 ? "active":""}>MARS</li>
                        <li onClick={()=> setCount(2)} className={count === 2 ? "active":""}>EUROPA</li>
                        <li onClick={()=> setCount(3)} className={count === 3 ? "active":""}>TITAN</li>
                    </ul>
                    <h2>{destination[count].name}</h2>
                    <p>{destination[count].description}</p>
                    <div className='distance d-flex'>
                        <div className='d-flex flex-column me-5 p-2'>
                            <span>AVG. DISTANCE</span>
                            <p>{destination[count].distance}</p>
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <span>EST. TRAVEL TIME</span>
                            <p>{destination[count].travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
