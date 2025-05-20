import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5500/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();

      if (!res.ok) {
        alert("Login fehlgeschlagen");
        return;
      }
      setUser(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="logindiv">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          type="text"
          name="username"
          id="username"
          placeholder="Type in your username"
        />
        <label htmlFor="password">password</label>
        <input
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          type="password"
          name="password"
          id="password"
          placeholder="Type in your password"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
