import React from "react";
import Hero from "./hero";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
  import Banner from "./banner";

function  Room  ({room}) {
    
    const {name,images ,slug,price}=room
    
  return ( 
    <article className="room">
       <div className="img-container">
        <img src={images[0]  } alt="single Room" />
        <div className="price-top" >
            <h6>{price}</h6>
            <p>pride de room</p>
            </div>
            <Link to={`/room/${slug}`} className="btttn-primary room-link" >slug </Link> 
       </div>
       <p className="room-info">{name} </p>
       </article>
   );
}
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired, // Le nom de la chambre doit être une chaîne non vide
    slug: PropTypes.string.isRequired, // Le type de la chambre doit être une chaîne non vide
  image:PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  }) // La chambre est requise et doit être un objet
};


export default Room;