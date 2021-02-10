import React from "react"
import "./CoursesSection.css"

import CourseCard from "../../Components/CourseCard/CourseCard"

class CoursesSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }

        this.LoadAllCourses = this.LoadAllCourses.bind(this)
    }

    componentDidMount() {
        this.LoadAllCourses();
    }

    LoadAllCourses() {
        fetch("http://localhost:3001/api/courses").then(response => response.json()).then(res => {
            var newCoursesArray = []
            for(var i in res) {
                newCoursesArray.push(res[i])
            }

            this.setState({courses: newCoursesArray})
        })
    }

    render(props) {
        return (
            <div className="courses-section-cont">
                <div className="courses-title-section">Your Enrolled Courses</div>
                <div className="courses-list-cont">
                    {this.state.courses.map(course => {
                        return (
                            <CourseCard id={course.CourseID} title={course.CourseName} img={course.Image} desc={course.Description} progress={course.Progress.toString()} />
                        )
                    })}
                    
                    {/* <CourseCard id="2" title="Music Collection Design" img="https://cdn.pixabay.com/photo/2020/11/07/01/28/abstract-5719221_960_720.jpg" desc="Learn to mix new beats." progress="19" />
                    <CourseCard id="3" title="Course 3" desc="A new course" progress="92" />
                    <CourseCard id="4" title="Course 4" desc="A new course" progress="2" />
                    <CourseCard id="5" title="Course 5" desc="A new course" progress="0" /> */}
                </div>
            </div>
        )
    }
}

export default CoursesSection