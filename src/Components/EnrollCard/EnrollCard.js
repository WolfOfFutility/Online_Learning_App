import React from "react"
import "./EnrollCard.css"

import {Link} from "react-router-dom"

import FavoriteIcon from '@material-ui/icons/Favorite';

const EnrollCard = (props) => {
    return (
        <Link to={"/Course/" + props.id} className="enroll-card-cont">
            <div className="indiv-course-title">
                <div className="indiv-course-title-text">{props.title}</div>
                <div className="indiv-course-title-fave"><FavoriteIcon className="fave-icon" /></div>
            </div>
            <div className="indiv-course-thumb" style={{backgroundImage: "url('" + props.img + "')"}}></div>
            <div className="indiv-course-desc"><p>{props.desc}</p></div>
            <div className="price-enroll-section">{"$" + props.price}</div>
        </Link>
    )
}

export default EnrollCard