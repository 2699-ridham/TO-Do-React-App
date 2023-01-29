import React from 'react'
import { FaTimesCircle } from "react-icons/fa";
function todoItems(props) {
    return (
        <div className='todo-style'>
            <div className="icon-style">
                <FaTimesCircle onClick={() => {
                    props.onSelect(props.id);
                }} />
            </div>
            <li>{props.text}</li>
        </div>
    )
}

export default todoItems;
