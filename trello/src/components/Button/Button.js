import React from 'react'
import './Button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BUTTON_TYPES = {
    ICONTEXT: 'icon-text',
    TEXT:'text',
    ICON: 'icon'
}

const Button = ({text,icon,type,size, className}) => (
    <div className={`button ${className} ${type} ${size}`}>
        <FontAwesomeIcon
        icon={icon}
        className='button-icon'
        style={{display: icon ? 'inline-block' : 'none'}}
        />
        {text}
    </div>
)

export default Button