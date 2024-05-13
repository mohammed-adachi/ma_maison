  import React from "react";
  import Hero from './hero';
  import Banner from'./banner';
  import { Link } from "react-router-dom";
  import Service from './service';
  import Personne from "./personneRoom";
  import Button from "./styledButon";

  
  const Home = () => {
    return (
      <>
        <Hero  >
        <Banner title="salam mohammed"  subtitle=" le prix de 255$"  link={<Link  to='/room' className="btttn-primary" >Room</Link>}  >
       
         </Banner>  
         
          </ Hero>
         
          <Service/>
          <Personne/>
          <Button>hello </Button>
          </>
      );
}
 
export default Home;
