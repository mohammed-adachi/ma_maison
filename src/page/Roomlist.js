import React from 'react';
import Room from "./Rom";
import Title from "./title"; 

export default function Roomlist({rooms}) {
const roomComponents = rooms.map(room => {
        return <Room id={room.id} room={room} />;
    });     

return (
    <div>
<section>
                <Title title="Featured Rooms" />
                <div className="single-room-images">{roomComponents}</div>
            </section>

     
    </div>
  )
}
