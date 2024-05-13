import React from "react";
import Banner from './banner';
import Hero from './hero';
import { Link } from "react-router-dom";
  
const Erreur = () => {
  return (
    <Hero>
    <Banner title="404" subtitle="Not found" link={<Link  to='/' className="btttn-primary" >Home</Link>} >
    </Banner>
    
    </Hero>
    );
}

export default Erreur;