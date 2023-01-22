import React from "react";

const Search = () => {
    return (
        <div className = 'search'>
            <div className = "searchForm">
                <input type = "text" placeholder='find a course'/>
            </div>
            <div className="userChat">
                <img src="https://engineering.purdue.edu/ECN/Support/KB/Docs/PurduePeteHistory/indexLogo.jpg" alt="" />
                <div className = "userChatInfo">
                    <span>CS 180000</span>
                </div>
            </div>
            
        </div>
    )
}

export default Search