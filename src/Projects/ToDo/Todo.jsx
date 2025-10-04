import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDateTime from './TodoDateTime';

const todoKey = "reactTodo";

const Todo = () => {
    const [task, setTask] = useState(() => {
        const rawTodos = localStorage.getItem(todoKey);
        if(!rawTodos) return [];
        return JSON.parse(rawTodos);
    });

    const handleFormSubmit = (inputValue) => {
        //  event.preventDefault();             //preventDefault ek method hai  jo by default event provide karti hai taki jo form ka jo defalut behaviour hai use prevent kar shake 
        const {id, content, checked} = inputValue;
        //to check input fild empty or not
        if(!content) return; 
        //to check id the data is already existing or not 
        // if(task.includes(inputValue)) return;
        const ifTodoContentMatch = task.find(
            (curTask) => curTask.content === content
        );
        if (ifTodoContentMatch) return;

         setTask((prevTask) => [
            ...prevTask, {id, content, checked}
        ]);     // esme ek power hai jo previous data store rakhata hai // spread operator(...prevTask)-eska matlab hai ki previous data ko as it is rakhiye aur next data ko add kijiye
        };

        //todo add data to localStorage 
        localStorage.setItem(todoKey, JSON.stringify(task));

         //todo handleDeleteTodo function 
        const handleDeleteTodo = (value) => {
            // console.log(task);
            // console.log(value)
            const updatedTask = task.filter((curTask) => curTask.content !== value)
            setTask(updatedTask);
        };

        //deleting and clear all element functionality
        const handleClearData = () => {
            setTask([]);
        }
//to handleCheckedTodo funtionality
        const handleCheckedTodo = (content) => {
            const updatedTask = task.map((curTask) => {
                if (curTask.content === content) {
                    return { ...curTask, checked: !curTask.checked };
                } else { 
                    return curTask;
                }
            })
        setTask(updatedTask);
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
                {task.map((curTask) => {
                    return (
                    <TodoList
                     key={curTask.id}
                     data={curTask.content} 
                     checked={curTask.checked}
                     onHandleDeleteTodo={handleDeleteTodo} 
                     onHandleCheckedTodo={handleCheckedTodo}
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

export default Todo;


// import React, { useState } from 'react'
// import './Todo.css'
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';
// import TodoDateTime from './TodoDateTime';

// const Todo = () => {
//     const [task, setTask] = useState([]);

//     const handleFormSubmit = (inputValue) => {
//         //  event.preventDefault();             //preventDefault ek method hai  jo by default event provide karti hai taki jo form ka jo defalut behaviour hai use prevent kar shake 
//         if(!inputValue) return; 
//         if(task.includes(inputValue)) return;
//          setTask((prevTask) => [...prevTask, inputValue]);     // esme ek power hai jo previous data store rakhata hai // spread operator(...prevTask)-eska matlab hai ki previous data ko as it is rakhiye aur next data ko add kijiye
//         };

//          //todo handleDeleteTodo function 
//         const handleDeleteTodo = (value) => {
//             console.log(task);
//             console.log(value)
//             const updatedTask = task.filter((curTask) => curTask !== value)
//             setTask(updatedTask);
//         };

//         //deleting and clear all element functionality
//         const handleClearData = () => {
//             setTask([]);
//         }

//   return (
//     <section className='todo-container'>
//         <header>
//             <h1>Todo list </h1>
//             <TodoDateTime />
//         </header>
//         <TodoForm onAddTodo={handleFormSubmit} />
//         <section className='myUnOrdList'>
//             <ul>
//                 {task.map((curTask, index) => {
//                     return (
//                     <TodoList
//                      key={curTask.id}
//                      data={curTask.content} 
//                      onHandleDeleteTodo={handleDeleteTodo} 
//                     /> 
//                     ) 
//                 })}
//             </ul>
//         </section>
//         <section>
//             <button className='clear-btn' onClick={handleClearData}>
//                 Clear All
//             </button>
//         </section>
//     </section>
//   )
// }

// export default Todo