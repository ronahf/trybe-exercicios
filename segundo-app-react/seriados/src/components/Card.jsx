import React from "react";

class Card extends React.Component {
    render () {
        const { name, characters, release, image, genre, rate } = this.props;
        console.log(name);
        console.log(characters);

        return (
            <div className='Card'>
                <div className='Card__Image'>
                    <img src={image} alt='teste' />
                </div>
                <div className='Card_Body'>
                    <h1>{name}</h1>
                    <p>
                        <span>{release}</span><br></br>
                        <span>{genre}</span>
                    </p>
                    <p className='stars'>{rate}</p>
                    <h2>Personagens</h2>
                    <ul>
                        {characters.map((person, index) => <li key={index}>{person}</li>)} 
                    </ul>
                </div>
            </div>
        )
    }

}

// import PropTypes from 'prop-types';

// Card.propTypes = {
//     name: ,
//     characters: ,
//     release: ,
//     image: ,
//     genre: ,
//     rate: ,
// }

export default Card;