import React from "react";
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import NavBarElection from "./navbar-e.js";
import "./assembly.css"
class Assembly extends React.Component{
    render () {
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <NavBarElection></NavBarElection>
                <div id="AssemblyFeed">
                <div className="section-header">
                    <p className="status">Last Updated Oct. 7, 2022, 3:22 PM E.T.</p>
                    <h1 className="election-name">General Assembly Election Results</h1>
                </div>
                <div className="section-content">
                    <p className="description">A lot of victories & upsets in this elections. Assemblymen RestiveSole267, ChumUnicorn64, LordHenryVonHenry, and Caisee13 all won thier re-elections. Assemblyman S3C lost his seat to tripnixon, Assemblyman FireMarshallBillBurns lost his seat to Redudancy, Assemblyman NotoriousAmerican lost his seat to Former Sheriff of the New Haven County Sheriff's Office Larry_Gallahan.</p>
                    <div className="atable">
                    <div className="aleft">
                            <div className="district1">
                                <h2 className="district-name">District 1</h2>
                                <table className="district1-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="RestiveInfo"><p className="WCandidateName">&#10003; RestiveSole267*</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">195</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">53.7%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="JamesInfo"><p className="CandidateName">JamesPawley</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Socialist</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">168</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">46.3%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 363 turnout</p>
                            </div>
                            <div className="district3">
                                <h2 className="district-name">District 3</h2>
                                <table className="district3-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="LHVHInfo"><p className="WCandidateName">&#10003; LHVH*</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Tinpot</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">229</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">67.6%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="AviaDInfo"><p className="CandidateName">AviaDylan</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">110</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">32.4%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 339 turnout</p>
                            </div>
                            <div className="district5">
                                <h2 className="district-name">District 5</h2>
                                <table className="district5-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="NerdoInfo"><p className="WCandidateName">&#10003; Redudancy</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">116</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">51.1%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="BillInfo"><p className="CandidateName">FireMarshallBillBurns*</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">111</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">48.9%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 227 turnout</p>
                            </div>
                            <div className="district7">
                                <h2 className="district-name">District 7</h2>
                                <table className="district7-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="LarryInfo"><p className="WCandidateName">&#10003; Larry_Gallahan</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">224</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">61.4%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="AmericanInfo"><p className="CandidateName">NotoriousAmerican*</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">141</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">38.6%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 365 turnout</p>
                            </div>
                        </div>
                        <div className="aright">
                            <div className="district2">
                                <h2 className="district-name">District 2</h2>
                                <table className="district2-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="ChumInfo"><p className="WCandidateName">&#10003; ChumUnicorn64*</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">195</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">60.1%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="DomInfo"><p className="CandidateName">Dominic8u</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">143</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">39.9%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 358 turnout</p>
                            </div>
                            <div className="district4">
                                <h2 className="district-name">District 4</h2>
                                <table className="district4-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="tripInfo"><p className="WCandidateName">&#10003; tripnixon</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Democrat</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">115</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">62.1%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="S3CInfo"><p className="CandidateName">S3C*</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">70</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">37.8%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 185 turnout</p>
                            </div>
                            <div className="district6">
                                <h2 className="district-name">District 6</h2>
                                <table className="district6-table">
                                    <tr>
                                        <th className="acandidate">CANDIDATE</th>
                                        <th className="aparty">PARTY</th>
                                        <th className="avotes">VOTES</th>
                                        <th className="apct">PCT.</th>
                                    </tr>
                                    <tr>
                                        <td className="CaiseeInfo"><p className="WCandidateName">&#10003; Caisee13*</p></td>
                                        <td className="CandidatePartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="CandidateVotesInfo"><p className="CandidateVotes">133</p></td>
                                        <td className="CandidatePCTInfo"><p className="CandidatePCT">52.4%</p></td>
                                    </tr>
                                    <tr>
                                        <td className="PandInfo"><p className="CandidateName">Pand_aaa</p></td>
                                        <td className="Candidate2PartyInfo"><p className="CandidateParty">Independent</p></td>
                                        <td className="Candidate2VotesInfo"><p className="CandidateVotes">121</p></td>
                                        <td className="Candidate2PCTInfo"><p className="CandidatePCT">47.6%</p></td>
                                    </tr>
                                </table>
                                <p className="reporting">100% reporting, 254 turnout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
    }
}

export default Assembly;