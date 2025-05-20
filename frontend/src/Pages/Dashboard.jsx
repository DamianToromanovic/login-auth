import React from "react";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:5500/todo");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos(); // ...und direkt aufrufen
  }, []);

  return (
    <>
      <div>hallo {user?.username}</div>
      <div>
        {todos.map((todo) => (
          <div key={todo.title}>
            <h2>{todo.title}</h2>
            <div>{todo.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}
