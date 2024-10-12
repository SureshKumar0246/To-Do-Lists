import TodoName from "./component/TodoName";

import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";
import TodoAdd from "./component/TodoAdd";
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState, useReducer, act } from "react";

let todoItemReducer = (currState, action) => {
  let newTodoItems = currState;
  if(action.type === "new_item"){
    newTodoItems = [...currState, {
      name: action.payload.name, dueDate: action.payload.dueDate,
    }]
  }
  else if(action.type === "delete_item"){
    let del = currState.filter(item => item.name !== action.payload.name);
    newTodoItems = del;
  }

  return newTodoItems
}

function App() {
  
  let initialtoodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/02/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/02/2024",
    },
    {
      name: "Like this video",
      dueDate: "right Now",
    },
    ];

    let [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

    // let [todoItems, setTodoItems] = useState(initialtoodoItems);
    // const handleOnClick = (todoName, todoDate) => {
    //    setTodoItems([...todoItems, {
    //     name: todoName,
    //     dueDate: todoDate,
    //    }])
    // }
    const handleOnClick = (todoName, todoDate) => {
      let newItemAction = {
        type: "new_item",
        payload: {
          name: todoName,
          dueDate: todoDate,
        },
      }
      dispatchTodoItems(newItemAction);
      //  setTodoItems((currValue)=>[...currValue, {
      //   name: todoName,
      //   dueDate: todoDate,
      //  }])
    }
    let handleOnDelete = (todoName) => {
      // let newItemAfterFilter = todoItems.filter(items => items.name !== todoName);
      // setTodoItems(newItemAfterFilter);
      let deleteItemAction = {
        type: "delete_item",
        payload: {
          name: todoName,
        },
      }
      dispatchTodoItems(deleteItemAction)
    }
  return (
<center className="todo-container ">
  <TodoName></TodoName>
  <TodoAdd onNewItem={handleOnClick}></TodoAdd>
  {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
  <TodoItems todoItems={todoItems} handleOnDelete={handleOnDelete}></TodoItems>

</center>
  );
}

export default App
