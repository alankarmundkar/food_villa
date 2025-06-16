// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// not recommenend by reduxjs/toolkit
// const deleteApiSlice =  createApi({
//   reducerPath: 'todoDelete',
//   baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
//   endpoints: function(builder){
//     return {
//       deleteTodo : builder.mutation({
//         query : (id)=>{
//           return {
//             url : '/todos/'+ id,
//             method: "DELETE",
//           }
//         },
//       })
//     }
//   }
// })
// export const { useDeleteTodoMutation} = deleteApiSlice;
// export default deleteApiSlice;

import apiSlice from "./apiSlice";


const deleteApiSlice = apiSlice.injectEndpoints({
  endpoints : function(builder){
    return {
      deleteTodo : builder.mutation({
        query : (id)=>({
          url : '/todos/'+ id,
          method: 'DELETE'
        }),
        // optimistic updates
        onQueryStarted: function (id,{dispatch, queryFulfilled}) {
         const action =  dispatch(apiSlice.util.updateQueryData('getAllTodos',undefined,(todos)=>{
            const newtodos = todos?.filter((todo)=> todo.id !== id)
            return newtodos
          })) 
          queryFulfilled.catch(()=>{
            action.undo()
          })
        }
      })
    }
  }
});


export const  {useDeleteTodoMutation } = deleteApiSlice;

export default deleteApiSlice

