import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
    let items = [
        'New York',
        'San Fransico',
        'Tokyo',
        'London',
        'Paris'
        
    ]
    
    
    //Hooks
   const [selectedIndex, setSelectedIndex] =  useState(-1);
//    arr[0] //variable (selectedIndex)
//    arr[1] // updater function

    // items = [];
    // const message = items.length === 0 ? <p>No item found</p>: null ;
    // const getMessage = ()=>{
    //     return  items.length === 0 ? <p>No item found</p>: null ;
    // }'

    // Eventhandler
    // const handleClick = (event:MouseEvent)=>{
    //     console.log(event);
    // }
    return (
    <>
    <h1>List</h1>
    {/* {message} */}
    {/* {getMessage()} */}
    {items.length === 0 && <p>No item found.</p>}
        <ul className="list-group">
            {items.map((item, index)=>(
                <li className={selectedIndex === index ? 'list-group-item active': 'list-group-item'} key={item} onClick={()=>setSelectedIndex(index)}>{item}</li>
            ))}
          </ul>
    </>
    )
}

export default ListGroup;