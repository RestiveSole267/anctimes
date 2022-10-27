import React from "react";
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import Deputy from "/Users/Restive/the-anchorage-times/src/components/images/ridgeway-ads-1.png";
import RidgewayCourthouse from "/Users/Restive/the-anchorage-times/src/components/images/ridgeway-court.png";
import MayCrash from "/Users/Restive/the-anchorage-times/src/components/images/maycrash.png";
import Sheriffs from "/Users/Restive/the-anchorage-times/src/components/images/sheriffs.png";
import "./politics.css";
class Politics extends React.Component{
    render(){
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <div id="politicsfeed">
                    <div className="politics-sectionheader">
                        <h1 className="politics-name">Politics</h1>
                    </div>
                    <div className="politics-navbar">RANDOM TEXT TO FILL IN THE SPACE FOR RIGHT NOW SO PLEASE IGNORE IT, I WILL FIX IT LATER.</div>
                    <div className="politics-sectioncontent">
                        <div className="feedboxone">
                            <div className="feedboxone-date">
                                <p className="feeddateone-text">Aug. 12, 2022</p>
                            </div>
                            <div className="feedboxone-info">
                                <h1 className="feedinfoone-header">Ridgeway Sheriff's Deputy Convicted On Stolen Equipment</h1>
                                <p className="feedinfoone-description">How a Ridgeway County Sheriff's Office Deputy was convicted and sentenced to death and imprisonment.</p>
                                <p className="feedinfoone-author">By TAXESARENTAWESOME</p>
                            </div>
                            <div className="feedboxone-img">
                                <img src={Deputy} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="feedboxtwo">
                            <div className="feedboxtwo-date">
                                <p className="feeddatetwo-text">Aug. 6, 2020</p>
                            </div>
                            <div className="feedboxtwo-info">
                                <h1 className="feedinfotwo-header">Ridgeway Chief Judge Impeached on Inactivity</h1>
                                <p className="feedinfotwo-description">The State Senate met in an emergency session on Friday to consider the impeachment of State Superior Court Chief Judge Mytrius.</p>
                                <p className="feedinfotwo-author">By TAXESARENTAWESOME</p>
                            </div>
                            <div className="feedboxtwo-img">
                                <img src={RidgewayCourthouse} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="feedboxthree">
                            <div className="feedboxthree-date">
                                <p className="feeddatethree-text">Apr. 29, 2022</p>
                            </div>
                            <div className="feedboxthree-info">
                                <h1 className="feedinfothree-header">The Justice Has Returned!</h1>
                                <p className="feedinfothree-description">An absence of the courts system has frustrated many Ridgewayians, however since April 3rd, some feel as if justice has finally returned.</p>
                                <p className="feedinfothree-author">By Tomskipetski5</p>
                            </div>
                            <div className="feedboxthree-img">
                                <img src={Sheriffs} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="feedboxfour">
                            <div className="feedboxfour-date">
                                <p className="feeddatefour-text">Feb. 7, 2022</p>
                            </div>
                            <div className="feedboxfour-info">
                                <h1 className="feedinfofour-header">Ridgeway seceding results in the downfall of the NUSA</h1>
                                <p className="feedinfofour-description">nUSA and Ridgeway have severed ties, and as a direct result, the amount of members within nUSA has dwindled down.</p>
                                <p className="feedinfofour-author">By TheAdventurer64</p>
                            </div>
                            <div className="feedboxfour-img">
                                <img src={MayCrash} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Politics;