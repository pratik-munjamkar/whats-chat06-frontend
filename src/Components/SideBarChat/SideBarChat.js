import React, { useState, useEffect } from "react";
import "./SideBarChat.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "../../axios.js";

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = async () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      try {
        await axios.post("/group/create", {
          groupName: roomName,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;