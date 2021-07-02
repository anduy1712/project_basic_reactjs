import React,{ useContext } from 'react';

import {TodosContext} from '../context/TodoContext';

const Alert = ({msg,type}) => {
    const {todos,removeAlert} = useContext(TodosContext);
    setTimeout(() => {
        removeAlert();
    }, 2000);
    return (
        <div className={`message ` + type}>
            {msg}
        </div>
        
    )
}
export default Alert;