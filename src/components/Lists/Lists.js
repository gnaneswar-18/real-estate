import React from 'react'
import './Lists.css'
import img from './home.jpg';
import Listcard  from '../Listcard/Listcard';
import houses from '../../data.js'
const Lists = () => {
 
  return (
    <div className="li-container">
      <h2><b>popular listing</b></h2>
      <div className="li-items">
        { houses.map((elem)=>{
          return <div className="li-item">
            <Listcard id={elem.id} title={elem.title} description={elem.description} image={img} beds={elem.beds}
             bathrooms={elem.bathrooms} rate={elem.rate} discount={elem.discount} area={elem.area} location={elem.location} added={elem.added}
            ></Listcard>
          </div>
        })}
      </div>     
    </div>
  )
}

export default Lists
