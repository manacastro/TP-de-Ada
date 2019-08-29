import React from 'react';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup'
import Button, { BUTTON_TYPES } from 'components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faTag, faTasks, faClock, faPaperclip, faArrowRight, faCopy, faEye, faFolder, faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import AddDescription from 'components/AddDescription/AddDescription';
import AddComents from 'components/AddComents/AddComents';
import Comment from 'components/Comment/Comment';
//import FormInput from 'components/FormInput/FormInput';
import './Modal.scss';

class Modal extends React.Component {
    state = {
        visible: true
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const { agregar, comentarios } = this.props
        return (

            <div className='modal'
                style={{
                    display: this.state.visible ?
                        'block' : 'none'
                }}>
                <FontAwesomeIcon className='x' icon={faTimes} onClick={this.toggle} />
                <div className='buttons-container'>
                    <div className="section-coments">
                        <AddDescription />
                        <AddComents onAgregarComentario={agregar} />
                        <div className='comentarios'>
                            {
                                comentarios.map(comment => <Comment
                                    key={comment.id}
                                    name={comment.name}
                                    comment={comment.comentario}
                                />)
                            }
                        </div>
                    </div>
                    <section className='modal-buttons'>
                        <ButtonGroup title='Añadir a la tarjeta'>
                            <Button text='Miembros' type={BUTTON_TYPES.ICONTEXT} icon={faUserFriends} />
                            <Button text='Etiquetas' type={BUTTON_TYPES.ICONTEXT} icon={faTag} />
                            <Button text='Checklist' type={BUTTON_TYPES.ICONTEXT} icon={faTasks} />
                            <Button text='Vencimiento' type={BUTTON_TYPES.ICONTEXT} icon={faClock} />
                            <Button text='Adjunto' type={BUTTON_TYPES.ICONTEXT} icon={faPaperclip} />
                        </ButtonGroup>
                        <ButtonGroup title='Acciones'>
                            <Button text='Mover' type={BUTTON_TYPES.ICONTEXT} icon={faArrowRight} />
                            <Button text='Copiar' type={BUTTON_TYPES.ICONTEXT} icon={faCopy} />
                            <Button text='Seguir' type={BUTTON_TYPES.ICONTEXT} icon={faEye} />
                            <Button text='Archivar' type={BUTTON_TYPES.ICONTEXT} icon={faFolder} />
                            <Button text='compartir' type={BUTTON_TYPES.ICONTEXT} icon={faShareAlt} />
                        </ButtonGroup>
                    </section>
                </div>
            </div>
        )
    }
}
export default Modal;