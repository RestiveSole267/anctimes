import React from "react";
import "./navbar.css"

class NavBar extends React.Component{
    render(){
        return (
            <div id="navbar">
                <div className="links">
                <a className="b" href="/politics">
                    Politics
                </a>
                <a className="b" href="/opinion">
                    Opinion
                </a>
                <a  className="b" href="/elections">
                    Elections
                </a>
                <a className="b" href="/video">
                    Video
                </a>
                </div>
            </div>
        );
    }
}

export default NavBar;