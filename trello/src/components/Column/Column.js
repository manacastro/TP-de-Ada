import React from 'react';
import Card from 'components/Card/Card';
import AddCard from 'components/AddCard/AddCard';
import './Column.scss';
import uuid from 'uuid/v4';

class Column extends React.Component {
    state = {
        cards: []
    }
    cambiarNombreCard = evento => {
        this.setState({cardName:evento.target.value})
    }
    agregarCard = (nombreCard, detalleTexto) => {
        const card = {
            id: uuid(),
            title: nombreCard,
            text: detalleTexto,
            tags: []            
        }
        const nuevoArray = this.state.cards.slice()
        
        nuevoArray.push(card)
        this.setState({cardName:'', cards:nuevoArray})
    }
    render() {
        const { title } = this.props
        return (    
            <div className='column'>
                <p>{title}</p>
                {
               this.state.cards.map(card => 
                <Card 
                key={card.id}
                title={card.title}
                text={card.text}
                tags={card.tags}
                    
                    />)
                }        
                <AddCard onAgregarCard={this.agregarCard}/>              
            </div>
        )
    }
}        
export default Column;
