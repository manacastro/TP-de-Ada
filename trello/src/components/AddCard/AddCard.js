import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddCard.scss'

class AddCard extends React.Component {
    state = {
        visible: false,
        cardName: ''
    }
    cambiarNombreCard = evento => {
        this.setState({cardName:evento.target.value})
    }    
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const {onAgregarCard} = this.props
        return (
            <div className='add-card-control'>
                <div
                    className='add-card-form'
                    style={{
                        display: this.state.visible ?
                        'block' : 'none'
                    }}>
                    <textarea
                        className='card-title-input'
                        placeholder='Introduzca un título para esta tarjeta'
                        value={this.state.cardName}
                        onChange={this.cambiarNombreCard}
                    />
                    <div className="bot" onClick={() => onAgregarCard(this.state.cardName)}>                       
                        <FontAwesomeIcon className="x" icon={faTimes} onClick={this.toggle} />
                        <p className="save" >Guardar tarjeta</p>
                    </div>
                </div>
                {
                 !this.state.visible &&   
                 <div className='add-card-button'
                    onClick={this.toggle}>
                    <FontAwesomeIcon icon={faPlus} color='White'/> &nbsp;
                 Añadir tarjeta</div>
                }                   
            </div>
        )
    }
}
export default AddCard;