"use client";
import React, { useState } from "react";
import MessageBox from "../dm/messagebox";
import UserList from "./userList";

const ServerBox = () => {

    const [sidebar, setSidebar] = useState(true);

    return <>
        <MessageBox setSidebar={setSidebar} sidebar={sidebar} />
        {
            sidebar && <UserList />
        }
    </>;
}

export default ServerBox;
