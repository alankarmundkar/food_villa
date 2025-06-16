import { useState } from "react";
import { useGetAllTodosQuery , useAddTodoMutation } from "../utils/apiSlice";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {

  const queryObj = useGetAllTodosQuery();
  const { data, isLoading, error,refetch}  = queryObj
  const [addTodo] = useAddTodoMutation();
  const [enteredToDo,setEnteredToDo] = useState()

  console.log(queryObj,'queryObj')
  const handleInputChange = (e) => {
    setEnteredToDo(e.target.value)
  }

  const handleAddTodo = async () =>{
    try {
     const data = await addTodo({
      todo: enteredToDo,
      completed: false,
      userId: 123
    })
    // .unwrap()
    console.log(data,'handleAddTodo')
    // if(data?.todo){
    //   refetch()
    // }
    } catch (error) {
      
    }
   

  }

  return (
    <div>
      {console.log("Rendering ui")}
      <input type="text" value={enteredToDo} onChange={handleInputChange} ></input>
      <button style={{backgroundColor: 'wheat',marginInline:10}} onClick={handleAddTodo}>Add To Do</button>
      <ul style={{display:'flex', flexDirection:'column', gap: 10}}>
        {data?.map((props) => (
           <ToDoItem 
              key={props?.id}
              {...props}
            />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
