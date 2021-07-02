import React, { useContext } from 'react';
import {TodosContext} from '../context/TodoContext';



const TodosSubmit = () => {
    const {edit,name,handleSubmit,handleOnchange} = useContext(TodosContext);
    return (
        <form className="todos__form" onSubmit={handleSubmit}>
            <input onChange={handleOnchange} placeholder="eg. eess" className="todos__form-input" type="text" value={name}/>
            <button type="submit" className="todos__form-btn">{edit ? 'Edit' : 'Submit'}</button>
        </form>
    );
}

export default TodosSubmit