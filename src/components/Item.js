import React from 'react';

const Item = props => {
    return <li
        className={`Item${props.isCompleted ? " completed" : ""}`}
        onClick={() => props.completeItem(props.index)}
    >
        {props.content}
    </li>;
};

export default Item;