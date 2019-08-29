import React from 'react';
import './AddComents.scss';

class AddComents extends React.Component {
    state = {
        commentsName: '',        
    }
    cambiarComentario = evento => {
        this.setState({commentsName:evento.target.value})
    }
    render() {
        const {onAgregarComentario} = this.props
        return (
            <div className='text-modal'>
                <p className='title-text'>Añadir comentarios</p>
                <input className='input-coment'
                placeholder="Agregar comentario" 
                type="text" 
                value={this.state.commentsName}
                onChange={this.cambiarComentario}
                />
                <button className='guardar-comentario' onClick={() => onAgregarComentario(this.state.commentsName)}>Guardar</button>
            </div>
        )
    }
}

export default AddComents;