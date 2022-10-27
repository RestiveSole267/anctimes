import React from "react";
import StandingHeader from '/Users/Restive/the-anchorage-times/src/components/home/standing-header.js';
import NavBar from '/Users/Restive/the-anchorage-times/src/components/navbar.js';
import Feed from '/Users/Restive/the-anchorage-times/src/components/home/feed.js';

class Home extends React.Component{
    render(){
        return (
            <div id="Home">
                <StandingHeader></StandingHeader>
                <NavBar></NavBar>
                <Feed></Feed>
            </div>
        );
    }
}

export default Home;