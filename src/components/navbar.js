import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css"

class NavBar extends React.Component{
    render(){
        return (
            <div id="navbar">
                <div className="links">
                <Link to="/anctimes/politics" className="b">
                    Politics
                </Link>
                <Link to="/anctimes/opinion" className="b">
                    Opinion
                </Link>
                <Link to="/anctimes/elections" className="b">
                    Elections
                </Link>
                <Link to="/anctimes/video" className="b">
                    Video
                </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;