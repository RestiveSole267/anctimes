import React from "react";
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import NavBarElection from "./navbar-e.js";
import Fouronefour from "/Users/Restive/the-anchorage-times/src/components/404.js";
class Polls extends React.Component{
    render () {
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <NavBarElection></NavBarElection>
                <Fouronefour></Fouronefour>
            </div>
     );
    }
}

export default Polls;