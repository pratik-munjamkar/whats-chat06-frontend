import React, { useEffect, useState } from "react";
import "./App.css";
import LogIn from "./Components/LogIn/LogIn";
import Chat from "./Components/Chat/Chat";
import SideBar from "./Components/SideBar/SideBar";
import Pusher from "pusher-js";
import axios from "./axios.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./Components/ContextApi/StateProvider";

const App = () => {
  const [{ user }] = useStateValue();
  const [messages, setMessages] = useState([]);

  console.log(messages);

  return (
    <div className="app">
      {!user ? (
        <LogIn />
      ) : (
        <div className="app-body">
          <Router>
            <SideBar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route exact path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;