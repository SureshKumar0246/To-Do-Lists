import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
const TodoItems = ({todoItems, handleOnDelete}) => {
    return (
        <div className="item-center">
  
  
  {todoItems.map(item => <TodoItem tododate={item.dueDate} todoName={item.name} handleOnDelete={handleOnDelete}></TodoItem>)}
  {/* <TodoItem tododate="4/02/2024" todoName="Milk"></TodoItem>
  <TodoItem tododate="4/02/2024" todoName="Go to College"></TodoItem> */}
  
  </div>
    );
}
export default TodoItems;