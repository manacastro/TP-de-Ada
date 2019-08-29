import React from 'react';
import './Tags.scss'

export const TAG_TYPES = {
    SMALL: 'tag-small',
    BIG: 'tag-big'
}

const Tag = ({ type, name, color,}) => (
    <div className={type} 
        style={{backgroundColor:color}
}>
    {name}
    </div>
)

export default Tag;