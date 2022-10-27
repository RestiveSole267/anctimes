import React from "react";
import moment from "moment";
import "./standing-header.css";

class StandingHeader extends React.Component{
    render(){
        const date = moment().format('dddd, MMMM Do, YYYY')
        return (
            <div id="standing-header">
                <a className="logo" href="/">The Anchorage Times</a>
                <div className="date">
                    {date}
                </div>
            </div>
        );
    }
}

export default StandingHeader;
