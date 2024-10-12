import { useState, useRef } from "react";
import { IoIosAdd } from "react-icons/io";


function TodoAdd({onNewItem}){

  // let [todoName, setTodoName] = useState()
  // let [todoDate, setTodoDate] = useState()

  const toDoNameElement = useRef();
  const dueDateElement = useRef()

  // const handleOnChangeName = (event) => {
  //    setTodoName(event.target.value)
  // }
  // const handleOnChangeDate = (event) => {
  //   setTodoDate(event.target.value);
  // }
  const handleOnClick = (event) => {
   event.preventDefault();
   const todoName = toDoNameElement.current.value;
   const todoDate = dueDateElement.current.value;
         onNewItem(todoName, todoDate);
         toDoNameElement.current.value = ""
         dueDateElement.current.value = ""
      // setTodoName("");
      // setTodoDate("")
  }
return(
    <div className="container">
      
  <form className="row kgrow" onSubmit={handleOnClick}>
    <div className="col-6">
      <input type="text" ref={toDoNameElement} placeholder="Enter todo here" /*value={todoName} onChange={handleOnChangeName}*//>
    </div>
    <div className="col-4">
    <input type="date" ref={dueDateElement} /*onChange={handleOnChangeDate} value={todoDate}*/ />
    </div>
    <div className="col-2">
    <button type="submit" className="btn btn-danger kgbtn" ><IoIosAdd />
    </button>
    </div>
  </form>
  </div>
)
}
export default TodoAdd;