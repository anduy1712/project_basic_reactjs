import React,{ useContext } from 'react';
import TodosItem from './TodosItem';
import TodosSubmit from './TodosSubmit';
import Alert from './Alert';

import {TodosContext} from '../context/TodoContext';

const Todos = () => {
    const {todos,message,clearTodos} = useContext(TodosContext);

    return (
        <div className="Todos">
            {message.show ? '' : <Alert msg={message.msg} type={message.type}/>}
            
            {/* {message.show ?  '' : <div  className={`message ` + message.type}>{message.msg}</div>} */}
            <h1 className="todos__title">Grocery Bud</h1>
            <TodosSubmit/>
            <ul className="todos__list">
                {todos ? todos.map((todo,i) =>{
                    return <TodosItem key={todo.id} id={todo.id} index={i} name={todo.name}/>
                }) : ''}
                
                
            </ul>
            <a onClick={clearTodos} className="todos__remove"> Clear Item</a>
        </div>
    )
}
export default Todos;