import React from "react"
import { Link } from "@reach/router"


const Footer = props => {
    return(
        <div className="row" style={{borderTop: "2px solid lightgrey", marginTop: "20px"}}>
            <div className="col-12 text-center">
                <p style={{marginTop: "10px"}}>MERN Project - May 2020 | <a target="_blank" rel="noopner noreferrer" href="https://github.com/John-W-Stevens/WASB_Analytics">GitHub</a></p>
            </div>
        </div>
    )
}

export default Footer