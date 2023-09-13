// import Message from './Message'
// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
//   let items = [
//     'New York',
//     'San Fransico',
//     'Tokyo',
//     'London',
//     'Paris'
    
// ]
// const handleSelectItem =(item:string)=>{
//   console.log(item);
  
// }
const[alertVisible, setAlertVisible] = useState(false);
  return (
    <div className="App">
      {/* <Message /> */}
      {/* <ListGroup items = {items} heading="Cities" onSelectItem={handleSelectItem}  /> */} 
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}> My Alert! </Alert>}
      <Button onClick={()=>setAlertVisible(true)
      }>
        MyButton
      </Button>
    </div>
  )
}

export default App;
