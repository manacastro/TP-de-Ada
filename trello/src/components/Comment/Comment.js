import React from 'react';
import './Comment.scss';

const Comment = ({name, comment}) =>(
    <div className = 'Comment'>
        {name}
        {comment}
    </div>
)

export default Comment;