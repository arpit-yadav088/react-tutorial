
// import React from 'react';
// import Todo from './Projects/ToDo/ToDo';
// import ReactState from './components/ReactState';
// import { DerivedState } from './components/DerivedState';
// import { LiftingState } from './components/LiftingState';
// import ToggleSwitch from './Projects/ToggleSwitch/ToggleSwitch';
// import Netflix from './components/Netflix';
// import './index.css'
// import './components/Netflix.css';
// import EventHandling from './components/EventHandling';
// import EventProps from "./components/EventProps";
// import EventPropagation from "./components/EventPropagation";

// import { ReactUseEffect } from "./components/Hooks/useEffect"
import CleanUp from "./components/Hooks/useEffect/CleanUp"
// import EffectChallenge from "./components/Hooks/useEffect/EffectChallenge"
// import Ragistration from "./components/Hooks/useState/Ragistration"
// import RagistrationForm from "./components/Hooks/useState/RagistrationForm"
// import ContactForm from "./components/Hooks/useState/ContactForm"
// import LoginForm from "./components/Hooks/useState/LoginForm"

// import Challenge from "./components/Hooks/useState/Challenge"

// import ShortCircuit from "./components/Hooks/ShortCircuit"


const App = () => {
  return (
    <section className='container'>
      {/* <h1 className="card-heading">This is list of Best Netfix card</h1>
       <Netflix />  */}

       {/* <ToggleSwitch /> */}
       {/* <EventHandling /> */}
       {/* <EventProps /> */}
       {/* <EventPropagation /> */}
       {/* <ReactState /> */}
       {/* <DerivedState /> */}
       {/* <LiftingState /> */}
       {/* <Todo /> */}
       {/* <ShortCircuit /> */}
       {/* <Challenge /> */}
       {/* <Ragistration /> */}
       {/* <RagistrationForm /> */}
       {/* <LoginForm /> */}
       {/* <ContactForm /> */}
       {/* <ReactUseEffect /> */}
       {/* <EffectChallenge /> */}
       <CleanUp />

    </section>
  )
}

export default App


// const Netflix = () => {

//   const movi = 'Jaat';
//   const rating = 8.4;
//   const summary = 'Jaat (2025), directed by Gopichand Malineni (in his Hindi debut), features Sunny Deol in a powerful return as a mysterious stranger who stands up against tyranny in a coastal Indian village';
//   const age = 17;

//   //2nd way to declare button 

//   return (
//     <div>
//       <div className='pl-3'>
//       <>
//       <h1 
//       className='text-2xl w-3xl font-bold mt-4 mb-1'>Movie: {movi}</h1>
//      <div 
//       className='flex item-botom justify-center'>
//       <img src='download.jpg' alt='download.jpg' />
//       <button 
      
//       className='bg-gray-400 mt-70 border-1 ml-1 '> {age>=18 ? "Watch Now" : "Not Available"} </button>
//        <h4 
//        className='items-center text-3xl font-bold justify-center'>views 2M</h4>
//      </div>
//       <button 
//       className='bg-cover bg-blue-600 font-bold border-2 mt-0.5'>Download
//         <select className='ml-2 bg-amber-200'>
//           <option>360ps</option>
//           <option>720ps</option>
//           <option>1080ps</option>
//         </select>
//       </button>
//       <h2 className=' text-2xl flex items-center justify-normal text-amber-700 font-extrabold mt-2'>Rating: {rating}
//       </h2>
//       <h3 className='text-2xl text-black font-bold mt-2'> Summery :
//       </h3>
//       <p className='font-semibold flex '>{summary}
//       </p>
//       </>
//     </div>
//     </div>
//   );
//   };

  

//    export default App




  //1st way to create button watch now or not avialable 

//   if (age<18){

//   return (
//     <div>
//       <div className='pl-3'>
//       <>
//       <h1 
//       className='text-2xl w-3xl font-bold mt-4 mb-1'>Movie: {movi}</h1>
//      <div 
//       className='flex item-botom justify-center'>
//       <img src='download.jpg' alt='download.jpg' />
//       <button 
      
//       className='bg-gray-400 mt-70 border-1 ml-1 '>Not Available</button>
//        <h4 
//        className='items-center text-3xl font-bold justify-center'>views 2M</h4>
//      </div>
//       <button 
//       className='bg-cover bg-blue-600 font-bold border-2 mt-0.5'>Download
//         <select className='ml-2 bg-amber-200'>
//           <option>360ps</option>
//           <option>720ps</option>
//           <option>1080ps</option>
//         </select>
//       </button>
//       <h2 className=' text-2xl flex items-center justify-normal text-amber-700 font-extrabold mt-2'>Rating: {rating}
//       </h2>
//       <h3 className='text-2xl text-black font-bold mt-2'> Summery :
//       </h3>
//       <p className='font-semibold flex '>{summary}
//       </p>
//       </>
//     </div>
//     </div>
//   );
//   };

//     return (
//     <div>
//       <div className='pl-3'>
//       <>
//       <h1 
//       className='text-2xl w-3xl font-bold mt-4 mb-1'>Movie: {movi}</h1>
//      <div 
//       className='flex item-botom justify-center'>
//       <img src='download.jpg' alt='download.jpg' />
//       <button 
      
//       className='bg-gray-400 mt-70 border-1 ml-1 '>Watch Now</button>
//        <h4 
//        className='items-center text-3xl font-bold justify-center'>views 2M</h4>
//      </div>
//       <button 
//       className='bg-cover bg-blue-600 font-bold border-2 mt-0.5'>Download
//         <select className='ml-2 bg-amber-200'>
//           <option>360ps</option>
//           <option>720ps</option>
//           <option>1080ps</option>
//         </select>
//       </button>
//       <h2 className=' text-2xl flex items-center justify-normal text-amber-700 font-extrabold mt-2'>Rating: {rating}
//       </h2>
//       <h3 className='text-2xl text-black font-bold mt-2'> Summery :
//       </h3>
//       <p className='font-semibold flex '>{summary}
//       </p>
//       </>
//     </div>
//     </div>
//   )
// };


// export default App