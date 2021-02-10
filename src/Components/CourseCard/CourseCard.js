import React from "react"
import "./CourseCard.css"

import { Link } from "react-router-dom"

import FavoriteIcon from '@material-ui/icons/Favorite';

const CourseCard = (props) => {
    return (
        <Link to={"/Course/" + props.id} className="indiv-course-box">
            <div className="indiv-course-title">
                <div className="indiv-course-title-text">{props.title}</div>
                <div className="indiv-course-title-fave"><FavoriteIcon className="fave-icon" /></div>
            </div>
            <div className="indiv-course-thumb" style={{backgroundImage: "url('" + props.img + "')"}}></div>
            <div className="indiv-course-desc"><p>{props.desc}</p></div>
            <div className="indiv-course-progress">
                <div className="progress-outer">
                    <div className="progress-inner" style={{width: props.progress + "%"}}>
                        <p>{props.progress + "%"}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard