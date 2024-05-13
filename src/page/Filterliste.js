import React from 'react'
import { useContext } from 'react'
import {RoomContext} from './context';
import Title from './title';
const getunique=(room,value)=>{
return [...new Set(room.map(room=>room[value]))]
}


export default function Filterliste({rooms}) {
  const local = useContext(RoomContext);
  const { 
   handlechange,
    type,
    capacity,
    minprix,
    maxprix,
    minsize,
    maxsize,
    breakfast}=local;
let capacites=getunique(rooms,'capacity')

capacites=capacites.map((item,index)=>
{return <option value={item} key={index} >{item}</option>}
)
      let types =getunique(rooms,'type')
      types=['all',...types];
      
      types=types.map((item,index)=>
      
      {return <option value={item} key={index} >{item}</option>

      }
      )  
  return (
    
   <section className="filter-container">
    <Title title="serch roms" />
    
    <from>
      <div>
        
      <label htmlFor='type'>room type</label>
      <select name="type" id="type" value={type} className='form-control' onChange={handlechange} >
      {types}
      </select>
      </div>
      <div>
    <label>Capacite</label>
    <select name="capacity" id="capacity" value={capacity}  onChange={handlechange} >
      {capacites}
      </select>

      </div>
    </from>

   </section>
  )
}
