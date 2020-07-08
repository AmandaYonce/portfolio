import React, {Component} from 'react';
import resume from './Images/Resume.jpg'
import pdf from "./Images/pdfResume.pdf"
import "./resume.css"

class Resume extends Component {
    render() {
      return (
        <React.Fragment>
            <div className="Main">
                <div  className="pdf"><a href={pdf}>Click here for a PDF of my resume</a></div>
            <img className="Resume" style={{width: "50%"}} src={resume} alt="Resume"/>
            </div>
        </React.Fragment>
      )}
}

export default Resume


