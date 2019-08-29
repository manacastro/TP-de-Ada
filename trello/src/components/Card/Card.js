import React from 'react';
import Tags, { TAG_TYPES } from 'components/Tags/Tags';
import Modal from 'components/Modal/Modal';
import uuid from 'uuid/v4';
import './Card.scss';


class Card extends React.Component {
    state = {
        cardModalVisible: false,
        comentarios: []
    }
    cambiarNombreComentario = evento => {
        this.setState({ commentsName: evento.target.value })
    }
    agregarComentario = (nombre, descripcion) => {
        const comentario = {
            id: uuid(),
            name: nombre,
            comentario: descripcion
        }
        const nuevoArray = this.state.comentarios.slice()
        nuevoArray.push(comentario)
        this.setState({ commentsName: '', comentarios: nuevoArray })
    }
    toggleModal = () => {
        this.setState({ ModalVisible: !this.state.ModalVisible })
    }
    render() {
        const { tags, title, text } = this.props
        return (
            <>
                <div className='card' onClick={this.toggleModal}>
                    <div className='tag'>
                        {
                            tags.map(tag => <Tags
                                key={tag.id}
                                name={tag.name}
                                color={tag.color}
                                type={TAG_TYPES.SMALL}
                            />)
                        }
                    </div>
                  
                    <p>{title}</p>
                    <p>{text}</p>
                   
                </div>
                {
                    this.state.ModalVisible &&                                     
                    <Modal onClose={this.toggleModal} agregar={this.agregarComentario} comentarios={this.state.comentarios}/>       
                }
            </>
        )
    }

}
export default Card;