import React from "react";
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import NavBarElection from "./navbar-e.js";
import "./referendum.css"
class Referendum extends React.Component{
    render () {
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <NavBarElection></NavBarElection>
                <div id="ReferendumFeed">
                    <div className="section-header">
                        <p className="status">Last Updated Oct. 7, 2022, 4:02 PM E.T.</p>
                        <h1 className="election-name">Referendum Results</h1>
                    </div>
                    <div className="section-content">
                    <p className="description">A lot of referendums approved by the voters, Referendum 1 (The Fair Practice Amendment) & Referendum 2 (The Recall Amendment) receiving an overwhelming amount of voter's approval, while Referendum 3 (The Protection Amendment) & Referendum 4 (The Military Judiciary Removal) receiving an majority but not overwhelming support of voter's approval. </p>
                    </div>
                    <div className="rtable">
                        <div className="rleft">
                            <div className="referendum1">
                                <h3 className="referendum-num">Referendum 1</h3>
                                <h2 className="referendum-name">The Fair Practice Amendment</h2>
                                <table className="referendum1-table">
                                    <tr>
                                        <th className="ranswer">ANSWER</th>
                                        <th className="rvotes">VOTES</th>
                                        <th className="rpct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="answeryes"><p className="yes">&#10003; Yes</p></td>
                                        <td className="yesvotesinfo"><p className="yesvotes">106</p></td>
                                        <td className="yespctinfo"><p className="yespct">75.7%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="answerno"><p className="no">No</p></td>
                                        <td className="novotesinfo"><p className="novotes">34</p></td>
                                        <td className="nopctinfo"><p className="nopct">24.3%</p></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="referendum3">
                                <h3 className="referendum-num">Referendum 3</h3>
                                <h2 className="referendum-name">The Protection Amendment</h2>
                                <table className="referendum3-table">
                                    <tr>
                                        <th className="ranswer">ANSWER</th>
                                        <th className="rvotes">VOTES</th>
                                        <th className="rpct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="answeryes"><p className="yes">&#10003; Yes</p></td>
                                        <td className="yesvotesinfo"><p className="yesvotes">81</p></td>
                                        <td className="yespctinfo"><p className="yespct">57.4%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="answerno"><p className="no">No</p></td>
                                        <td className="novotesinfo"><p className="novotes">60</p></td>
                                        <td className="nopctinfo"><p className="nopct">42.6%</p></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="rright">
                            <div className="referendum2">
                                <h3 className="referendum-num">Referendum 2</h3>
                                <h2 className="referendum-name">The Recall Amendment</h2>
                                <table className="referendum2-table">
                                    <tr>
                                        <th className="ranswer">ANSWER</th>
                                        <th className="rvotes">VOTES</th>
                                        <th className="rpct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="answeryes"><p className="yes">&#10003; Yes</p></td>
                                        <td className="yesvotesinfo"><p className="yesvotes">111</p></td>
                                        <td className="yespctinfo"><p className="yespct">82.2%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="answerno"><p className="no">No</p></td>
                                        <td className="novotesinfo"><p className="novotes">24</p></td>
                                        <td className="nopctinfo"><p className="nopct">17.8%</p></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="referendum4">
                                <h3 className="referendum-num">Referendum 4</h3>
                                <h2 className="referendum-name">The Military Judiciary Removal</h2>
                                <table className="referendum4-table">
                                    <tr>
                                        <th className="ranswer">ANSWER</th>
                                        <th className="rvotes">VOTES</th>
                                        <th className="rpct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="answeryes"><p className="yes">&#10003; Yes</p></td>
                                        <td className="yesvotesinfo"><p className="yesvotes">76</p></td>
                                        <td className="yespctinfo"><p className="yespct">53.5%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="answerno"><p className="no">No</p></td>
                                        <td className="novotesinfo"><p className="novotes">66</p></td>
                                        <td className="nopctinfo"><p className="nopct">46.5%</p></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
    }
}

export default Referendum;