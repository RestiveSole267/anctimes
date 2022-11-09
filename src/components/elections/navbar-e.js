import React from "react";
import { Link } from "react-router-dom"
import BallotBox from "/Users/Restive/the-anchorage-times/src/components/images/ballot-box.png";
import "./navbar-e.css"

class NavBarElection extends React.Component{
    render(){
        return (
            <div id="navbarelection">
                <div className="linksa">
                <Link to="/anctimes/elections" className="ca"><img src={BallotBox} width="20px" height="20px" className="BallotBox" alt="Ballot-Box.png"></img><p className="ELECTION-HEADER">ELECTIONS</p></Link>
                <Link to="/anctimes/mayorial" className="c">
                    Mayorial
                </Link>
                <Link to="/anctimes/assembly" className="c">
                    Assembly
                </Link>
                <Link to="/anctimes/referendum" className="c">
                    Referendums
                </Link>
                <Link to="/anctimes/polls" className="c">
                    Polls
                </Link>
                </div>
            </div>
        );
    }
}

export default NavBarElection;