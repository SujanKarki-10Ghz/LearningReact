import {useState} from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <>
     <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
         <button className='btn btn-primary' onClick={()=>setCounter((prevCount)=> prevCount -1)}>-</button>
         <h1 className='fw-bold'>{counter}</h1>
         <button className='btn btn-secondary' onClick={()=>setCounter((prevCount)=> prevCount + 1)}>+</button>
     </div> 
    </>
  )
}

export default Counter
