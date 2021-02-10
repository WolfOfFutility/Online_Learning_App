import React from "react"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-cont">
            <div className="title-area">
                <h2>Online Learning App</h2>
                <h4>A Place For All To Learn.</h4>
            </div>
            <div className="showcase-videos-section">
                <div className="showcase-video"></div>
                <div className="showcase-video"></div>
                <div className="showcase-video"></div>
            </div>
        </div>
    )
}

export default Home