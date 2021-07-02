import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();
const getData = () => {
    const list = localStorage.getItem('todos');
    if(list)
    {
        return JSON.parse(list)
    }
    else {
        return []
    }
}
const TodosContextProvider = ({children}) => {

    //state
    //list
    const [todos, setTodos] = useState(getData());
    //Name
    const [name,setName] = useState('');
    //Edit
    const [edit,setEdit] = useState(false);
    const [index,setIndex] = useState();
    //Message
    const [message,setMessage] = useState({show:false,msg:'',type:''});

    //--------------------------------------
    //method
    //Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit){
            const todosEdit = todos.map( (todo,i) => {
                if(i == index)
                {
                    console.log('OK');
                    return {...todo,name};
                }
                return todo;
            })
           setTodos(todosEdit); 
           setEdit(!edit);
           setName('') 
            setMessage({show:false,msg:'Value Changed',type:'message-success'});

        }
        else{
            if(name.length != 0)
            {
                const items = {
                    id: uuidv4(),
                    name,
                }
                setTodos([...todos,items]);        
                setName('');
                setMessage({show:false,msg:'Item Added To The List',type:'message-success'});

            }
            else{
                setMessage({show:false,msg:'Please Enter Value',type:'message-danger'});
                
            }
            
        }
        
    }
    //Onchange
    const handleOnchange = (e) => {
        setName(e.target.value);
        
    }
    //Delete
    const deleteTodo = (id) => {
        const todoDelete = todos.filter(todo =>{
            return todo.id !== id
        });
        setTodos(todoDelete);
        setMessage({show:false,msg:'Item Removed',type:'message-danger'});

    }
    //Edit 
    const editTodo = (index) => {
        setEdit(true);
        const {name} = todos[index];
        setName(name);
        setIndex(index);

        // const todoEdit = todos.map(todo =>{
        //      todo[index].name= ""
        // })
        
    }
    //Remove Message
    const removeAlert = () =>{
        setMessage({...message,show: true})
    }
    //Clear Todos
    const clearTodos = () =>{
        setTodos([]);
    }
    //--------------------------------------
    //useEffect
    useEffect(()=>{
        
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    //data
    const TodosData = {
        todos,edit,name,message,removeAlert,handleSubmit,handleOnchange,deleteTodo,editTodo,clearTodos
    };
    return (
        <TodosContext.Provider value={TodosData}>
            {children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider;