import React, { Component } from "react";
import { RoomContext } from './context';
import Room from "./Rom"; // Importez correctement le composant Room
import Title from "./title"; // Importez correctement le composant Title

class Personne extends Component {
    static contextType = RoomContext;

    render() {
        const { loading, featuredRoom: rooms } = this.context;

        // Vérifiez d'abord si loading est vrai
        if (loading) {
            return <div>Loading...</div>; // Affichez un message de chargement si loading est vrai
        }

        // Sinon, si les chambres sont disponibles, mappez chaque chambre dans le composant Room
        const roomComponents = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });

        return (
            <section>
                <Title title="Featured Rooms" />
                <div className="single-room-images">{roomComponents}</div>
            </section>
        );
    }
}

export default Personne;
