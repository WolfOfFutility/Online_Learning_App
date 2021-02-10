import React from "react"
import "./MainArea.css"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import SideMenu from "../SideMenu/SideMenu"
import TopMenu from "../TopMenu/TopMenu"

import Home from "../../Routes/Home/Home"
import SearchSection from "../../Routes/SearchSection/SearchSection"
import CoursesSection from "../../Routes/CoursesSection/CoursesSection"
import FavouritesSection from "../../Routes/FavouritesSection/FavouritesSection"
import IndivCourse from "../../Routes/IndivCourse/IndivCourse"

class MainArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(props) {
        return (
            <div className="main-area-cont">
                <SideMenu />
                <TopMenu />
                
                <div className="content-area">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/Search">
                            <SearchSection />
                        </Route>
                        <Route path="/Courses">
                            <CoursesSection />
                        </Route>
                        <Route path="/Favourites">
                            <FavouritesSection />
                        </Route>
                        <Route path="/Course/:id" render={(props) => <IndivCourse {...props}/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainArea