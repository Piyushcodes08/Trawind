import React from 'react'
import './destination.css'
import TitleSection from '../titlesection/TitleSection'
import { destination } from '../../Data.jsx'
import { Link as ScrollLink } from 'react-scroll';
import { RiTelegram2Fill } from "react-icons/ri";




const Destination = () => {
  return (
    <>
      <section className="destination section container" id="destination">
         <TitleSection
              subtitle={'Top Destinations'}
              title={"Legendary Places"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              } />
              <div className="destination-container">
{destination.map(({id, img, title, rating, price})=>{
  return(
    <div className="destination-item" key={id}>
      <img src={img} alt={title} className="destination-img" />
      <div className="destination-details">
        <div className="destination-top">
          <span className="destination-price">{price}</span>
          <span className="destination-rating">{rating}</span>
        </div>
        <div className="destination-title">{title}</div>
 <ScrollLink to='/' className='button home-button'> about us <RiTelegram2Fill className='button-icon' /></ScrollLink>
        
      </div>
    </div>
  )
})}
              </div>
      </section>
    </>
  )
}

export default Destination
