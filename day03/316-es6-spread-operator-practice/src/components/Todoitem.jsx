import React from "react";

function TodoItem(props) {
    

    function handleClick() {
        setCross(prevValue => !prevValue)
    }
    return (<li onClick={
        () => {
            props.onChecked(props.id)
        }
    } key={props.index}>{props.value}</li>)
}

export default TodoItem;