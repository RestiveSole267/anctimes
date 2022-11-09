import React from "react";
import "./navbar.css"

class NavBar extends React.Component{
    render(){
        return (
            <div id="navbar">
                <div className="links">
                <a className="b" href="/anctimes/politics">
                    Politics
                </a>
                <a className="b" href="/anctimes/opinion">
                    Opinion
                </a>
                <a  className="b" href="/anctimes/elections">
                    Elections
                </a>
                <a className="b" href="/anctimes/video">
                    Video
                </a>
                </div>
            </div>
        );
    }
}

export default NavBar;