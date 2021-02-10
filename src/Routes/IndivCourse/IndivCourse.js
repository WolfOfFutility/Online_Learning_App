import React from "react"
import "./IndivCourse.css"

import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer"
import CourseSideMenu from "../../Components/CourseSideMenu/CourseSideMenu"

class IndivCourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sentID: this.props.match.params.id,
            course: {}
        }

        this.LoadCourseDetails = this.LoadCourseDetails.bind(this)
    }

    componentDidMount() {
        this.LoadCourseDetails();
    }

    async LoadCourseDetails() {
        await fetch("http://localhost:3001/api/courses/data?id=" + this.state.sentID).then(response => response.json()).then(res => {
            this.setState({course: res})
        })
    }

    render(props) {
        console.log(this.state.course.Classes)
        return (
            <div className="indiv-course-cont">
                <div className="indiv-course-title-section">{this.state.course.CourseName}</div>
                <div className="course-area">
                    <CourseSideMenu listItems={this.state.course.Classes} />
                    <VideoPlayer />
                </div>
            </div>
        )
    }
}

export default IndivCourse