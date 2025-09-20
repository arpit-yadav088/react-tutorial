import { useState } from 'react'
import './EV.css'

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue}) => {
    
    return (
        <>
          <input
           type='text' placeholder='enter your text here'
            value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </>
    )
};


const DisplayComponent = ({inputValue}) => {
    return (
        <p>the current input value is : {inputValue}</p>
    )
}

