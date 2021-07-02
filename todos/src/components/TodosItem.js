import React,{ useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {TodosContext} from '../context/TodoContext';

const TodosItem = ({id,index,name}) => {
    const {deleteTodo,editTodo} = useContext(TodosContext);

    return (
        <li className="list__item">
            <p className="item__name">{name}</p>
            <div className="item__action">
                <FaEdit onClick={() => editTodo(index)} className="item__action-edit"/>
                <FaTrash onClick={() => deleteTodo(id)} className="item__action-delete"/>
            </div>
        </li>
    );
}

export default TodosItem