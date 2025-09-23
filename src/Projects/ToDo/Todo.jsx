import React, { useState } from 'react'
import './Todo.css'
import { FcTodoList} from "react-icons/fc";
import { MdDeleteForever, MdCheck } from "react-icons/md";


const Todo = () => {
    
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
         event.preventDefault();             //preventDefault ek method hai  jo by default event provide karti hai
                                             //  taki jo form ka jo defalut behaviour hai use prevent kar shake 
           if(!inputValue) return; 

           if(task.includes(inputValue)) {
            setInputValue("");
            return;
           }

            setTask((prevTask) => [ ...prevTask, inputValue]);     // esme ek power hai jo previous data store rakhata hai // spread operator(...prevTask)-eska matlab hai ki previous data ko as it is rakhiye aur next data ko add kijiye

            setInputValue("");
        };


  return (
    <section className='todo-container'>
        <header>
            <h1>Todo list 
                 <FcTodoList className='icons'/>
            </h1>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type='text'
                     placeholder='type here'
                      className='todo-input'
                       autoComplete='off'
                        value = {inputValue}
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                </div>
                <div className="">
                    <button type='submit' className='todo-btn'>Add task</button>
                </div>
            </form>
        </section>
        <section className='myUnOrdList'>
            <ul>
                {
                    task.map((curTask, index) => {
                        return <li key={index} className='todo-item'>
                            <span>{curTask}</span>
                            <button className='check'><MdCheck /></button>
                            <button className='delete'><MdDeleteForever /></button>
                        </li>
                    })
                }
            </ul>
        </section>
    </section>
  )
}

export default Todo