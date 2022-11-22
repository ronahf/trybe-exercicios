import React, { Component } from "react";

class HelloWorld extends Component {
    render() {
        
        const nomes = ["Ronaldo", "Henrique", "Francisco"];
        console.log(nomes);
        
        return (
        <section>
            {nomes.map((nome) => (
                <span key={nome}> Hello World {nome}</span>
            ))}
        </section>
        )        
    }
}

export default HelloWorld