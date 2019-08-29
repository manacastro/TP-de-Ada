import React from 'react';
import './AddDescription.scss';


class AddDescription extends React.Component {
    state = {

    }
    render() {
        return (
            <div className='text-modal'>
                <p className='title-text'>Descripción</p>
                <input className='input-description' ></input>
                <button className='guardar-descripcion' >Guardar</button>
            </div>
        )
    }
}
export default AddDescription;