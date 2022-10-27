import React from "react";
import BallotBox from "/Users/Restive/the-anchorage-times/src/components/images/ballot-box.png";
import "./navbar-e.css"

class NavBarElection extends React.Component{
    render(){
        return (
            <div id="navbarelection">
                <div className="linksa">
                <a className="ca" href="/elections"><img src={BallotBox} width="20px" height="20px" className="BallotBox" alt="Ballot-Box.png"></img><p className="ELECTION-HEADER">ELECTIONS</p></a>
                <a className="c" href="/mayorial">
                    Mayorial
                </a>
                <a className="c" href="/assembly">
                    Assembly
                </a>
                <a  className="c" href="/referendums">
                    Referendums
                </a>
                <a className="c" href="/polls">
                    Polls
                </a>
                </div>
            </div>
        );
    }
}

export default NavBarElection;