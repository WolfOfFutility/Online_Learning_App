import React from "react"
import { Link } from "react-router-dom"
import "./SideMenu.css"

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClassIcon from '@material-ui/icons/Class';

const SideMenu = () => {
    return (
        <div className="side-menu-cont">
            <div className="side-menu-spacer"></div>
            <div className="side-menu-spacer"></div>
            <div className="side-menu-spacer"></div>
            <Link id="home-menu-button" to="/" className="side-menu-button">
                <HomeIcon className="menu-icons" />
            </Link>
            <Link id="search-menu-button" to="/Search" className="side-menu-button">
                <SearchIcon className="menu-icons" />
            </Link>
            <Link id="courses-menu-button" to="/Courses" className="side-menu-button">
                <ClassIcon className="menu-icons" />
            </Link>
            <Link id="faves-menu-button" to="/Favourites" className="side-menu-button">
                <FavoriteIcon className="menu-icons" />
            </Link>
            <div className="side-menu-spacer"></div>
            <div className="side-menu-spacer"></div>
            <div className="side-menu-spacer"></div>
        </div>
    )
}

export default SideMenu