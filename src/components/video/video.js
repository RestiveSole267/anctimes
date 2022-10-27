import React from "react";
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import FourOneFour from "/Users/Restive/the-anchorage-times/src/components/404.js";
class Video extends React.Component{
    render(){
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <FourOneFour></FourOneFour>
            </div>
        );
    }
}

export default Video;