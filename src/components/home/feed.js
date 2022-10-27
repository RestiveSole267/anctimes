import React from "react";
import "./feed.css";
import StateCaptial from "/Users/Restive/the-anchorage-times/src/components/images/image1 (3).png"
import Tower from "/Users/Restive/the-anchorage-times/src/components/images/unknown.PNG";
import Stan from "/Users/Restive/the-anchorage-times/src/components/images/unknown 3.PNG";
class Feed extends React.Component{
    render(){
        return (
            <div id="feed">
                <div className="content">
                    <div className="left">
                        <div className="first">
                            <div className="contenta">
                                <h1>Anchorage Winter Wonderland</h1>
                                <p>Finally Anchorage Winter Wonderland! Yep you heard right, Anchorage finally has been given it winter wonderland that it has been asking for weeks, as the weather has been forecasting as quite gloomy with little snow for the past week.</p>
                                <p>In honor of Anchorage first Winter Wonderland for this year, Governor Malanchunk has declared a closure of the government business and schools for the next two days this week as the snow has been recorded to reach 5 inches.</p>
                            </div>
                            <div className="image">
                                <img src={StateCaptial} width="625px" height="400px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                        <div className="second">
                            <div className="contenta">
                                <h1>Grand Opening Of New City Hall</h1>
                                <p>As snow covers Anchorage, the government still continues it business as usual. Fairbanks as recently built a new city hall in the heart of the city, Governor Malanchunk is seen here in the photo in front of the new city hall getting ready to cut the ribbon across the new building.</p>
                                <p>The building includes a new waiting area, along with an upgraded office for the mayor, deputy mayor, and new assembly chamber that is more open to the public.</p>
                            </div>
                            <div className="image">
                                <img src={Stan} width="625px" height="350px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="firsta">
                            <div className="imagea">
                                <img src={Tower} width="320px" height="205px" className="StateCaptial" alt="SC.png"></img>
                            </div>
                            <div className="contenta">
                                <h2>The New, Anchorage Tower Chimes At 12</h2>
                                <p>The chimes in Anchorage's new bell tower are a lovely addition to the urban landscape. Even though the tower was only finished last year, both tourists and locals like visiting it. The tower's summit offers an amazing view, and the chimes can be heard throughout the entire city.</p>
                            </div>
                        </div>
                        <div className="seconda">
                            <div className="contenta">
                                <h4>RESTIVESOLE267</h4>
                                <h2>Coming Up Elections</h2>
                            </div>
                        </div>
                        <div className="thirda">
                            <div className="contenta">
                                <h4>CHUMBUCKETYT</h4>
                                <h2>Ziax's Burgers Now Open</h2>
                            </div>
                        </div>
                        <div className="fourtha">
                            <div className="contenta">
                                <h4>LUSO</h4>
                                <h2>The Assembly Under Fire</h2>
                            </div>
                        </div>
                        <div className="fiftha">
                            <div className="contenta">
                                <h4>CHUMBUCKETYT</h4>
                                <h2>Koala's Newest Injunction</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;