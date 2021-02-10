import React from "react"
import "./SearchSection.css"

import EnrollCard from "../../Components/EnrollCard/EnrollCard"

class SearchSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            query: ""
        }

        this.CallSearchResults = this.CallSearchResults.bind(this)
    }

    CallSearchResults(event) {
        fetch("http://localhost:3001/api/search/courses?query=" + event.target.value).then(response => response.json()).then(res => {
            this.setState({searchResults: res})
        })
    }

    render(props) {
        return (
            <div className="search-section-cont">
                <div className="search-title-section">
                    <div className="search-title-text">
                        Search Courses
                    </div>
                    <div className="search-box">
                        <input id="search-field" type="search" onChange={(event) => this.CallSearchResults(event)}/>
                        <button id="search-button">Search</button>
                    </div>
                </div>
                
                <div className="results-list-cont">
                    {this.state.searchResults.map((result, key) => {
                        return (
                            <EnrollCard key={key} id={result.CourseID} title={result.CourseName} img={result.Image} desc={result.Description} price="10.00" />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SearchSection