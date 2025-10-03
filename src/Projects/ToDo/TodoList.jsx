import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'

const TodoList = ({data, checked, onHandleDeleteTodo, onHandleCheckedTodo}) => {
  return (
    <li className='todo-item'>
        <span className={checked ? "checkList" : "notcheckList"}>{data}</span>
        <button className='check-btn' onClick={() =>  onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        <button className='delete-btn'
          onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever /></button>
    </li>
  )
}

export default TodoList;


// import React from 'react'
// import { MdCheck, MdDeleteForever } from 'react-icons/md'

// const TodoList = ({ data, onHandleDeleteTodo}) => { 
//   return (
//     <li key={key} className='todo-item'>
//         <span>{data}</span>
//         <button className='check-btn'>
//           <MdCheck />
//         </button>
//         <button className='delete-btn'
//           onClick={() =>onHandleDeleteTodo(data)}>
//         <MdDeleteForever /></button>
//     </li>
//   )
// }

// export default TodoList;