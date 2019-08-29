import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddColumn.scss'

class AddColumn extends React.Component {
    state = {
        visible: false,
        columnName: ''
    }
    cambiarNombreColumna = evento => {
        this.setState({columnName:evento.target.value})
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const {onAgregarColumna} = this.props
        return (
            <div className='add-column-control'>
                <p>Nueva columna</p>
                <div className='column-new'
                    style={{
                        display: this.state.visible ?
                        'block' : 'none'
                    }}>
                    <textarea
                        type='text'
                        className='column-title-input'
                        placeholder='Introduzca un título para esta columna'
                        value={this.state.columnName}
                        onChange={this.cambiarNombreColumna}
                    />
                    <div className="bot">                       
                        <FontAwesomeIcon className='x' icon={faTimes} onClick={this.toggle} />
                        <p className="save" onClick={() => onAgregarColumna(this.state.columnName)}>Guardar columna</p>
                    </div>
                </div>    
                {
                    !this.state.visible &&
                    <div className='add-colum-button'
                        onClick={this.toggle}>
                        <FontAwesomeIcon icon={faPlus} color='White' /> &nbsp;
                        Añadir columna</div>
                }                
                
            </div>
        )
    }
}

export default AddColumn;