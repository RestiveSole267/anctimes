import React from "react";
import "/Users/Restive/the-anchorage-times/src/components/elections/mayorial.css"
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import NavBarElection from "./navbar-e.js";
import Avia from "/Users/Restive/the-anchorage-times/src/components/images/avia1.jpg";
import Stan from "/Users/Restive/the-anchorage-times/src/components/images/stan.jpg"
class Mayorial extends React.Component{
    render(){
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <NavBarElection></NavBarElection>
                <div id="ElectionFeed">
                <div className="section-header">
                    <p className="status">Last Updated Sept. 24, 2022, 2:44 PM E.T.</p>
                    <h1 className="election-name">Mayorial Election Results</h1>
                </div>
                <div className="section-content">
                    <p className="description">Jean-Paul Absi was elected the 5th Mayor of Anchorage. Mr. Absi won the people's vote with 242 votes (65.6%) compared Incumbent Mayor of Anchorage Maksim Malanchunk who won only 127 votes (34.4%). This election had the highest voter turnout with 369 votes compared to the 250 votes back in 2020.</p>
                    <div className="winner-box">
                        <div className="eleft">
                            <img src={Avia} width="75px" height="75px" className="Avia" alt="Avia.png"></img>
                        </div>
                        <div className="eright">
                            <h2 className="winner">WINNER &#10003;</h2>
                            <p className="box-text">Jean-Paul Absi wins the election.</p>
                            <p className="caller">Race called by Anchorage Election Committee</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="top-table">
                            <p className="lastupdate">Updated March 25, 2021</p>
                            <p className="certified">VOTE TOTAL CERTIFIED &#10003;</p>
                        </div>
                    </div>
                    <table className="results">
                        <tr>
                            <th className="candidate">Candidate</th>
                            <th className="party">Party</th>
                            <th className="votes">Votes</th>
                            <th className="pct">PCT.</th>
                        </tr>
                        <tr>
                            <td className="AviaInfo"><img src={Avia} width="50px" height="50px" className="Avia" alt="Avia.png"></img> <p className="AviaName">&#10003; Jean-Paul Absi</p></td>
                            <td className="AviaPartyInfo"><p className="AviaParty">Republican</p></td>
                            <td className="AviaVotesInfo"><p className="AviaVotes">242</p></td>
                            <td className="AviaPCTInfo"><p className="AviaPCT">65.6%</p></td>
                        </tr>
                        <tr>
                            <td className="StanInfo"><img src={Stan} width="50px" height="50px" className="Stan" alt="Stan.png"></img> <p className="StanName">Maksim Malanchuck</p></td>
                            <td className="StanPartyInfo"><p className="StanParty">Libertarian</p></td>
                            <td className="StanVotesInfo"><p className="StanVotes">127</p></td>
                            <td className="StanPCTInfo"><p className="StanPCT">34.4%</p></td>
                        </tr>
                    </table>
                    <p className="reporting">100% reporting, 369 turnout</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Mayorial;