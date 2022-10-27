import React from "react";
import StandingHeaderSmall from '/Users/Restive/the-anchorage-times/src/components/standing-header-small.js';
import MPBS from "/Users/Restive/the-anchorage-times/src/components/images/mpbs_73.png";
import Courthouse from "/Users/Restive/the-anchorage-times/src/components/images/courthouse.png"
import MayCrash from "/Users/Restive/the-anchorage-times/src/components/images/maycrash.png"
import Sheriffs from "/Users/Restive/the-anchorage-times/src/components/images/sheriffs.png"
import "./opinion.css"
class Opinion extends React.Component{
    render(){
        return (
            <div className="App">
                <StandingHeaderSmall></StandingHeaderSmall>
                <div id="opinionfeed">
                    <div className="opinion-sectionheader">
                        <h1 className="opinion-name">Opinion</h1>
                    </div>
                    <div className="opinion-navbar">RANDOM TEXT TO FILL IN THE SPACE FOR RIGHT NOW SO PLEASE IGNORE IT, I WILL FIX IT LATER.</div>
                    <div className="opinion-sectioncontent">
                        <div className="feedboxone">
                            <div className="feedboxone-date">
                                <p className="feeddateone-text">Feb. 9, 2021</p>
                            </div>
                            <div className="feedboxone-info">
                                <h1 className="feedinfoone-header">Faulty Laws That (Try To) Protect Information</h1>
                                <p className="feedinfoone-description">How the NDA Act (S.B.46) & the State Secrets Act (S.B.07) fail to protect information.</p>
                                <p className="feedinfoone-author">By KOALAMEDVEDEVA</p>
                            </div>
                            <div className="feedboxone-img">
                                <img src={MPBS} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="feedboxtwo">
                            <div className="feedboxtwo-date">
                                <p className="feeddatetwo-text">Nov. 5, 2020</p>
                            </div>
                            <div className="feedboxtwo-info">
                                <h1 className="feedinfotwo-header">Right To Counsel: Put In Jeopardy</h1>
                                <p className="feedinfotwo-description">Development Mandate, 6th Amendment Waiver Mechanism doesn't exactly do what it sounds like it would do.</p>
                                <p className="feedinfotwo-author">By KOALAMEDVEDEVA</p>
                            </div>
                            <div className="feedboxtwo-img">
                                <img src={Courthouse} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="feedboxthree">
                            <div className="feedboxthree-date">
                                <p className="feeddatethree-text">Oct. 30, 2020</p>
                            </div>
                            <div className="feedboxthree-info">
                                <h1 className="feedinfothree-header">The Perfect Crime: Loophole In The Correctional Security Act (2019)</h1>
                                <p className="feedinfothree-description">How the Correctional Security Act (S.B.75) allows Sheriff's Office Deputies to fire away with no consequences.</p>
                                <p className="feedinfothree-author">By KOALAMEDVEDEVA</p>
                            </div>
                            <div className="feedboxthree-img">
                                <img src={Sheriffs} width="275px" height="150px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="feedboxfour">
                            <div className="feedboxfour-date">
                                <p className="feeddatefour-text">Aug. 30, 2019</p>
                            </div>
                            <div className="feedboxfour-info">
                                <h1 className="feedinfofour-header">Bad Drivers On The Rise</h1>
                                <p className="feedinfofour-description">How the broken windows theory could solve the progressing rate of bad drivers.</p>
                                <p className="feedinfofour-author">By PENGUINOPERATOR</p>
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

export default Opinion;