import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/shared/logo.svg"
import "./navbar.css";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { switchState } from './navbarSlice';

const Navbar = () => {

  const active = useSelector(state => state.navbar);
  const dispatch = useDispatch();

  const [show , setShow] = useState(false);
  const linksRef = useRef();
  
  useEffect(()=>{
    const hundelClick = (e)=>{
      if(!linksRef.current.contains(e.target)){
          setShow(false)
      }
    
    }
    document.addEventListener("mousedown",hundelClick);
    return()=>{
      document.removeEventListener("mousedown",hundelClick);
    }
  })
 
  const menuLinks = [
    {id:0, label:"HOME"},
    {id:1, label:"DESTINATION"},
    {id:2, label:"CREW"},
    {id:3, label:"TECHNOLOGY"}
  ]
  
  return (
    <nav className='d-flex justify-content-between align-items-center'>
      <div className='container ms-4'>
        <img src={logo} alt="" />
      </div>
      <div>
      {<div className={`mobile ${show ? "d-block":""}`} ref={linksRef}>
      <div className='links'>
          <ul className='container'>
            {menuLinks.map((link)=> (
              <Link to={`/${link.label}`} onClick={()=>dispatch(switchState(link.id))} className={`link ${active === link.id ? "active":""}`} key={link.id}><span className='me-3'>{String(link.id).padStart(2,"0")}</span>{link.label}</Link>
            ))}
          </ul>
      </div>
      </div>}
      <div onClick={()=> setShow(prev => !prev)} className='bars'>
          <span></span>
          <span></span>
          <span></span>
      </div>
      </div>
    </nav>
    
  )
}

export default Navbar
