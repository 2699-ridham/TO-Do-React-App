import React from 'react'
import { FaRegWindowClose, FaRegEdit } from "react-icons/fa";

function todoItems(props) {
    return (
        <div className='todo-style'>
            <li>{props.nameItem}</li>
            <div className="icon-style">
                <FaRegWindowClose className='delete' onClick={() => {
                    props.onSelect(props.uni);
                }} />
                <FaRegEdit className='edit' onClick={() => {
                    props.onEdit(props.uni);
                }} />
            </div>
        </div>
    )
}

export default todoItems;
