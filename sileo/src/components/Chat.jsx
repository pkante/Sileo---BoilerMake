import React from "react";
import Cam from "/Users/pranavkante/Documents/Sileo/Sileo---BoilerMake/sileo/src/pages/7233879.png";
import Add from "/Users/pranavkante/Documents/Sileo/Sileo---BoilerMake/sileo/src/pages/add.png";
import More from "/Users/pranavkante/Documents/Sileo/Sileo---BoilerMake/sileo/src/pages/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return (
        <div className = 'chat'>
            <div className="chatInfo">
            <span> Purdue Pete</span>
            <div className = "chatIcons">
                {/*<img src={Cam} alt="" />*/}
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat