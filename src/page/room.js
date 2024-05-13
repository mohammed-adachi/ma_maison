import React from "react";
import Hero from "./hero";
import { Link } from "react-router-dom";
  import Banner from "./banner";
  import Roomcatinaner from "./roomcatinaner"
  import {RoomConsumer} from "./context";
const Room = () => {
  return ( 
<>  

       <Hero>
    <Banner title="Room"  link={ <Link  to='/' className="btttn-primary" >Room</Link>} >
   
    </Banner>
    
    
    </Hero>
    < Roomcatinaner/>
    </>  
    
   );
}

export default Room;