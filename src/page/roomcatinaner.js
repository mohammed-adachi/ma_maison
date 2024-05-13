import React from 'react';
import {RoomConsumer} from "./context";
import Roomlist from "./Roomlist";
import Filterliste from "./Filterliste"


export default function roomcatinaner() {
  return (
    <RoomConsumer>
{value=>{ const { rooms,sortedRoom,featuredRoom}=value

const[name,size,type]=rooms;


  

return (<>
   
    <Filterliste rooms={rooms} />
    <Roomlist rooms={sortedRoom}/>
   
   
    
    
    </>  )
}}</RoomConsumer>
  )
  }
