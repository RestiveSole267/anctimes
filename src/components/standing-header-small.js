import React from "react";
import { Link } from "react-router-dom"
import "./standing-header-small.css";

class StandingHeaderSmall extends React.Component{
    render(){
        return (
            <div id="standing-header-small">
                <Link to="/" className="logoa">The Anchorage Times</Link>
            </div>
        );
    }
}

export default StandingHeaderSmall;
