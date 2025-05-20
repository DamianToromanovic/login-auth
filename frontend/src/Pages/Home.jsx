import React from "react";
import { useState } from "react";
import Login from "../components/Login";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setShow(true)}>öffne login</button>
        <div className="homediv">Hallo ich bin die StartSeite</div>
        {show && <Login />}
      </div>
    </>
  );
}
