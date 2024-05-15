import React from 'react'
import './Listcard.css'
import {useNavigate } from "react-router-dom";
const Listcard = (props) => {
  const navigate = useNavigate();
  const myfun=()=>{
    navigate(`/search/${props.id}`);
  }
  return (
    <div onClick={myfun}>
    <img id="li-img" src={props.image} alt=""/>
          <h3>{props.title}</h3>
          <p className='added-text'>{`Added: ${props.added}`}</p>
          <p className='card-p'> {props.description}</p>
          <p className='span-text'>
             <span className='span-in'>Bedrooms</span>
             <span className='span-in'>Bathrooms</span>
             <span className='span-in'>parking</span>
          </p>
          <i class="fa-solid fa-bed card-icon inline-text"></i>
          <p className='inline-text'>{props.beds}</p>
          <i class="fa-solid fa-shower card-icon inline-text"></i>
          <p className='inline-text'>{props.bathrooms}</p>
          <i class="fa-solid fa-square-parking card-icon inline-text"></i>
          <p className="inline-text">{props.area}</p>
          <i class="fa-regular fa-heart icon" style={{marginLeft:'30px'}}></i>
       
    </div>
  )
}

export default Listcard
