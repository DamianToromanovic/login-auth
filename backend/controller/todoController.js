import todos from "../data/todos.json" with {type: "json"}

export const todoController = (req, res)=>{
  
  res.json(todos)
}