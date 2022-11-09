import React from "react";
import moment from "moment";
import { Link } from "react-router-dom"
import "./standing-header.css";

class StandingHeader extends React.Component{
    render(){
        const date = moment().format('dddd, MMMM Do, YYYY')
        return (
            <div id="standing-header">
                <Link to="/" className="logo">The Anchorage Times</Link>
                <div className="date">
                    {date}
                </div>
            </div>
        );
    }
}

export default StandingHeader;
