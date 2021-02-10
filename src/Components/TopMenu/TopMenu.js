import React from "react"
import "./TopMenu.css"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LockIcon from '@material-ui/icons/Lock';

class TopMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none"
        }

        this.HoverMenuHandler = this.HoverMenuHandler.bind(this)
        this.LeaveMenuHandler = this.LeaveMenuHandler.bind(this)
    }

    HoverMenuHandler() {
        setTimeout(() => {
            this.setState({display: "block"})
        }, 100)
    }

    LeaveMenuHandler() {
        this.setState({display: "none"})
    }

    SwapAccountsHandler() {

    }

    render(props) {
        return (
            <div className="top-menu-cont">
                <div className="account-button-area" onMouseEnter={() => this.HoverMenuHandler()} onMouseLeave={() => this.LeaveMenuHandler()}>
                    <AccountCircleIcon className="account-menu-icons" />
                    <LockIcon className="account-menu-icons" style={{display: this.state.display}} onClick={() => console.log("Clicked Login")}/>    
                    <SwapHorizIcon className="account-menu-icons" style={{display: this.state.display}} onClick={() => console.log("Clicked Swap")}/>    
                </div>
            </div>
        )
    }
    
}

export default TopMenu