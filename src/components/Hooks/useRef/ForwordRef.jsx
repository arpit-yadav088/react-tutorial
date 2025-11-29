import { forwardRef, useId, useRef } from "react";
import './index.css'


const ForwardRef = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    };

  return (
    <form onSubmit={handelFormSubmit}>
        <BeforeReact19Input label="username" ref={username} />
        <BeforeReact19Input label="password" ref={password} />
        <button>Submit</button>
    </form>
  )
}

// I need to create BeforeReact19Input

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

// afterReact19 

const BeforeReact19Input = ({label, ref}) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    )
}

// const BeforeReact19Input 

export default ForwardRef;