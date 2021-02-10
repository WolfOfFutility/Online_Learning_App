import React from "react"
import "./VideoPlayer.css"

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(props) {
        return (
            <div className="video-player-cont">
                <video id="video" preload="metadata" className="main-video" controls>
                    <source src="video.mp4" type="video/mp4"></source>
                    <source src="video.ogg" type="video/ogg"></source>
                    Your browser does not support the video tag
                </video>
            </div>
        )
    }
}

export default VideoPlayer