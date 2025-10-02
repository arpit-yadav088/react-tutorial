 import React, { useState } from 'react'
 
 const TodoForm = ({onAddTodo}) => {
     const [inputValue, setInputValue] = useState("");

     const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
         event.preventDefault();
         onAddTodo(inputValue);
         setInputValue("");
    }

    return (
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
    )
}

export default TodoForm;