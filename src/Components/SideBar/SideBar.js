import React, { useEffect, useState } from "react";
import "./SideBar.css";
import {
  DonutLarge,
  Chat,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { IconButton, Avatar } from "@mui/material";
import SideBarChat from "../SideBarChat/SideBarChat";
import { useStateValue } from "../ContextApi/StateProvider";
import Pusher from "pusher-js";
import axios from "../../axios.js";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    axios.get(`/all/rooms`).then((response) => {
      setRooms(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("6fbb654a0e0b670de165", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("room");
    channel.bind("inserted", function (room) {
      // alert(JSON.stringify(newMessage));
      setRooms((prevRooms) => [...prevRooms, room]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src={user.photoURL} />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SideBarChat addNewChat />
        {rooms.map((room) => (
          <SideBarChat key={room._id} id={room._id} name={room.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;