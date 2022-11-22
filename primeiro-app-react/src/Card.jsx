import React, { Component } from "react";

class Card extends Component {
    render() {
        const data = [ {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvSBSr2KKl52KyC5ec-iSWa81_YsX208UOQ&usqp=CAU',
            titulo: 'xxx',
            descrição: 'blablabla'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVox21aONQOrn0RPLNekupkUBazXdjteYTA&usqp=CAU',
            titulo: 'xxx',
            descrição: 'blablabla'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMk4Jo1kvrMbwIgT26_OCLNNHO3EiMWCf9FQ&usqp=CAU',
            titulo: 'xxx',
            descrição: 'blablabla'
        }
        ]
        
        return (
            <div>
                {data.map((elemento) => (

                    <section>
                        <img 
                        src={elemento.img} 
                        alt="imagem do card do celular" />

                        <h1>Título: {elemento.titulo} </h1>

                        <p>Descrição: {elemento.descrição}</p>
                    </section>
                ))
            }
            </div>
        )        
    }
}

export default Card;