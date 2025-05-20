import React from "react";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { user } = useUser();
  return <div>hallo {user?.username}</div>;
}
