import { MdDelete } from "react-icons/md";
function TodoItem({tododate, todoName, handleOnDelete}){
 return(
    <div className="container">
  
  <div className="row kgrow">
    <div className="col-6 text">
    {todoName}
    </div>
    <div className="col-4 text">
    {tododate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success kgbtn" onClick={()=>handleOnDelete(todoName)}><MdDelete />
    </button>
    </div>
  </div>
  </div>
 )
}
export default TodoItem;