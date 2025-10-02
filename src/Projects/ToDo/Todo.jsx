import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDateTime from './TodoDateTime';

const Todo = () => {
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        //  event.preventDefault();             //preventDefault ek method hai  jo by default event provide karti hai taki jo form ka jo defalut behaviour hai use prevent kar shake 
        if(!inputValue) return; 
        if(task.includes(inputValue)) return;
         setTask((prevTask) => [...prevTask, inputValue]);     // esme ek power hai jo previous data store rakhata hai // spread operator(...prevTask)-eska matlab hai ki previous data ko as it is rakhiye aur next data ko add kijiye
        };

         //todo handleDeleteTodo function 
        const handleDeleteTodo = (value) => {
            console.log(task);
            console.log(value)
            const updatedTask = task.filter((curTask) => curTask !== value)
            setTask(updatedTask);
        };

        //deleting and clear all element functionality
        const handleClearData = () => {
            setTask([]);
        }

  return (
    <section className='todo-container'>
        <header>
            <h1>Todo list </h1>
            <TodoDateTime />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className='myUnOrdList'>
            <ul>
                {task.map((curTask, index) => {
                    return (
                    <TodoList
                     key={index}
                     data={curTask} 
                     onHandleDeleteTodo={handleDeleteTodo} 
                    /> 
                    ) 
                })}
            </ul>
        </section>
        <section>
            <button className='clear-btn' onClick={handleClearData}>
                Clear All
            </button>
        </section>
    </section>
  )
}

export default Todo