import React from "react";
import Card from "./Card";
import data from '../data';

class CardList extends React.Component {
    render () {
        
        return (
            <div className='Series_container'>
                {data.map((serie) => (
                    <Card 
                        key={serie.id}
                        name={serie.name}
                        release={serie.release}
                        image={serie.image}
                        characters={serie.characters}
                        genre={serie.genre}
                        rate={serie.rate}
                    />
                    // aqui cada prop foi passada em Card!
                ))}
            </div>
        )
    }
}

export default CardList;