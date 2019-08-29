import React from 'react'
import './ButtonGroup.scss'

const ButtonGroup = props => (
    <div className='button-group'>
        <h3 className='title'>{props.title}</h3>
        {props.children}
    </div>
)

export default ButtonGroup