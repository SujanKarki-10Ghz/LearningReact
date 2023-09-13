import { useState } from "react";

// {items:[], heading: string}
//In TS, we use interface to define the shape or an interface of an object
interface ListProps{
    items: string[];
    heading : string;
    // (item:string) => void
    onSelectItem: (item: string) =>void;
}


// import { MouseEvent } from "react";
// function ListGroup(props: ListProps) {
    function ListGroup ({items, heading, onSelectItem}:ListProps){    
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
    <h1>{heading}</h1>
    {/* {message} */}
    {/* {getMessage()} */}
    {items.length === 0 && <p>No item found.</p>}
        <ul className="list-group">
            {items.map((item, index)=>(
                <li className={selectedIndex === index ? 'list-group-item active': 'list-group-item'}
                 key={item}
                  onClick={()=>{
                    setSelectedIndex(index);
                    onSelectItem(item);
                  }}
                  >{item}</li>
            ))}
          </ul>
    </>
    )
}

export default ListGroup;