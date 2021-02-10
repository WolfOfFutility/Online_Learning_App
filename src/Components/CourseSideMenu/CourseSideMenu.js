import React from "react"
import "./CourseSideMenu.css"

import VideocamIcon from '@material-ui/icons/Videocam';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';

class CourseSideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            loaded: false
        }

        this.RenderClassList = this.RenderClassList.bind(this)
    }

    componentDidMount() {
        this.setState({list: this.props.listItems}, () => {
            this.setState({loaded: true})
        })
    }

    RenderClassList() {
        if(this.state.loaded) {
            return this.state.list.map((item, key) => {
                if(item.ClassType === "Video") {
                    return (
                        <div key={key} className="course-side-menu-button"><VideocamIcon className="icons"/>{item.ClassName}</div>
                    )
                }
                else if(item.ClassType === "Quiz") {
                    return (
                        <div key={key} className="course-side-menu-button"><HelpIcon className="icons"/>{item.ClassName}</div>
                    )
                    
                }
                else {
                    return (
                        <div key={key} className="course-side-menu-button"><MenuBookIcon className="icons"/>{item.ClassName}</div>
                    )
                }
            })
        }
        
    }

    render(props) {
        return (
            <div className="course-side-menu-cont">
                {/* {this.RenderClassList()} */}
                <div className="course-side-menu-button"><VideocamIcon className="icons"/>Video</div>
                <div className="course-side-menu-button"><VideocamIcon className="icons"/>Video</div>
                <div className="course-side-menu-button"><VideocamIcon className="icons"/>Video</div>
                <div className="course-side-menu-button"><VideocamIcon className="icons"/>Video</div>
                <div className="course-side-menu-button"><VideocamIcon className="icons"/>Video</div>
            </div>
        )
    }
}

export default CourseSideMenu