import React, { Component } from "react";
import {RoomContext} from './context';
import {Link} from "react-router-dom";
import Banner from "./banner";
import Hero from "./hero";
import Styleheader  from "./styleheader";
import DefaulImage   from "../images/room-1.jpeg";





class SeulRoom extends Component {
    constructor(props){
        super(props);
this.state={
    slug:this.props.match.params.slug
} 
   
 
    
    }
    static contextType=RoomContext

 
   render(){
    const { getRoom }=this.context;
    const room =getRoom(this.state.slug);
    
    
    if (!room) {
       return <div className="error">
        <h3>Not found</h3>
        <Link to='/room'  className="btttn-primary" > return to room </Link>
        </div>
        
    }
   
    const {name,images,slug,extras,type,price,size,capacity ,pets ,breakfast,featured,description}=room
    const [maiimage ,...DefauImage]=images;
    
    return <> <Styleheader img={maiimage || DefaulImage } >
    <Banner title={`${name} room`}  link={ <Link  to='/' className="btttn-primary" >Room</Link>} >
   
    </Banner>
    
    </Styleheader>
    <section className="single-room">
        <div className="single-room-images" >
            {DefauImage.map((item,index)=>{
                return <img key={index} src={item} alt={name}/>
            }
            )}
        </div>
        <div>
            <h3>detail</h3>
            <p>{description}</p>
            <article>
                <h6>prix:${price}</h6>
                <h6>size:${size}</h6>
                <ul>
            {extras.map((item,index)=>{
                return <li key={index} >-{item}</li>
            }
            )}
            </ul>
            </article>
          
        </div>
    </section>
    </>
}}

export default SeulRoom;
