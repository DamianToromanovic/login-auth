import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserProvider from "./context/UserContext.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
