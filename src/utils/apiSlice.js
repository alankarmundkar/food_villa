import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// reducers
// RTK:slice => represent a module
// api slice => ek module k api endpoints ko

const apiSlice = createApi({
  reducerPath:'toDoGet',
  tagTypes:['AddTodo','GetAllTodTag'],
  refetchOnFocus: true,     
  //default false
  refetchOnReconnect: true,
  // default: false
  // keepUnusedDataFor: 2,   
  // if components gets unmounted and mounted again it will not call all apis again 
  // instead will return from cache default value is 60 sec keepUnusedDataFor: 60
  baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com" , prepareHeaders: (header)=>{
    header.set('www-Authenicate',`Bearer 123`)
    return header
  }}),
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query:  () => {
          return "/todos";
        },
        transformResponse: (data)=>{
          return data?.todos || []
        },
        providesTags:["GetAllTodTag"],
        // keepUnusedDataFor: 2,   
      }),
      getTodo: builder.query({
        query:(id)=>{
          return `/todos/${id}`
        }
      }),
      addTodo: builder.mutation({
        query: (data) => ({
          url: '/todo/add',
          method:'POST',
          body: data
        }),
        invalidatesTags: ['GetAllTodTag']
      })
    };
  },
});
export const { useGetAllTodosQuery , useLazyGetTodoQuery, useAddTodoMutation} = apiSlice;
export default apiSlice;

// 5 important hooks
// useQuery gives you data , isLoading , error
    // use*YourFunctionNam*Query => useGetAllTodosQuery
// use LazyQuery
    // useLazy*YourFunctionNameQuery

// baseQuery: async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("alankar1", data);
//   return { data: data?.todos };
// },
// endpoints: function (builder) {
//   return{
//     getAllTodos : builder.query({
//       queryFn: async ()=>{
//         console.log('alankar')
//         const response = await fetch('https://dummyjson.com/todos')
//         const data = await response.json()
//         console.log('alankar1',data)
//         return { data : data?.todos }
//       }
//     })
//   }
// }
