import React from "react";

const Message = () => {
    return (
        <div className = 'message owner'>
            <div className = "messageInfo">
                <img 
                    src="https://engineering.purdue.edu/ECN/Support/KB/Docs/PurduePeteHistory/face1.jpg" alt="" 
                />
                <span>just now</span>
            </div>
            <div className = "messageContent">
                <p>hello</p>
                <img src="https://engineering.purdue.edu/ECN/Support/KB/Docs/PurduePeteHistory/face1.jpg" alt="" />
            </div>
        </div>
    )
}

export default Message