import { useEffect } from "react";
import { useLazyGetTodoQuery } from "../utils/apiSlice";
import { useDeleteTodoMutation } from "../utils/deleteApiSlice";

const ToDoItem = ({ id, todo, completed }) => {

  const [trigger, result ] = useLazyGetTodoQuery()
  const [deleteTrigger, deleteResult] = useDeleteTodoMutation()
  console.log(result,'remainingdata')
  console.log(deleteResult,'deleteResult')
  const handleGetStatus = () => {
    trigger(id)
  }

  useEffect(()=>{
      if(deleteResult?.isSuccess){
        alert('Deleted '+ deleteResult?.data?.todo)
      }
  },[deleteResult?.isSuccess])

  const handleDelete = () =>{
    deleteTrigger(id)
  }

  const getStatus = (completed)=>{
      return completed ? "completed" : "pending"
  }

  return (
    <li key={id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {todo}
      <button  style={{border: '1px solid white',color:'white',background:'red', padding: 5}} onClick={handleDelete}>Delete</button>
      <button style={{border: '1px solid gray' ,padding: 5}} onClick={handleGetStatus}>Get Status</button>
      {result?.data && <span>{getStatus(result?.data?.completed)}</span>}
      {result?.isError && <span>Error: {result?.error?.data?.message}</span>}
    </li>
  );
};

export default ToDoItem;
