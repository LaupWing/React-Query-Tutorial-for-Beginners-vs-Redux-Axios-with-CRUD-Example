import React, { useState } from "react"
import { useQuery, useQueryClient } from "react-query"

const TodoList = () => {
   const [newTodo, setNewTodo] = useState("")
   const queryClient = useQueryClient()
   // const /
   const {} = useQuery()
   return (
      <div>TodoList</div>
   )
}

export default TodoList