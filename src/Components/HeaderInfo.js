//header will go here
import "./styles.css";
import React from "react";
import profile_pic from "./images/linked in background.png"

function HeaderInfo() {
    return (
        <div className="jumbotron jumbotron-fluid">   
        <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
        <div className="headerText">
        <h1>Hello</h1>
        My name is Molly Durst. <br/>
        I am a web designer and developer who studies New Media Communication (UX focused) <br/>
        and Full-Stack development at the Ohio State University.<br/>
             </div>
             </div>
             </div>
    );
}

export default HeaderInfo;