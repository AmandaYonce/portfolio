import React, { Component, Fragment } from 'react';
import SFcert from "./Images/SFadmincert.jpg"
import Kenzie from "./Images/kenziecert.jpeg"
import FCC from "./Images/FCCcert.png"
import {
    CardBody,
    CardTitle, CardText
  } from 'reactstrap';


class Post extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Dear Hiring Manager,</CardTitle>
        
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '1rem' }}>
        As an early career junior Salesforce administrator and junior full stack developer with entry-level and academia-based technical experience, I am an ideal candidate for a Junior Salesforce Developer position.<br/><br/>
        I am a motivated professional with a demonstrable record of helping organizations meet their goals.  My positive attitude, world-class work ethic, and attention to detail have helped me succeed in a variety of fast-paced environments.  I take my work seriously, and approach every undertaking – whether it is cultivating customer rapport to drive satisfaction, executing software development activities, or managing technical software development projects through fulfillment – with enthusiasm, diligence, and positivity.  I am ready to tackle a challenging, professional position that makes excellent use of my multi-tasking, organizational, technical and relationship management skills.  <br/><br/>
        My strong communication skills and years of experience working with diverse groups allow me to move with ease and obtain commitments among clients and coworkers of varied backgrounds and different levels of responsibility.  I have the utmost respect for confidentiality, and approach sensitive matters with discretion and tact.  I am especially skilled at keeping operations running smoothly and efficiently in the midst of changes to technologies, procedures, or personnel.  
        My knowledge and hands-on learning experiences have prepared me well for a challenging role.<br/><br/>

        Sincerely,<br/><br/>
        Amanda L. Yonce</CardText>
      </CardBody>
      <img src={SFcert} alt="Salesforce Certification" className="img-fluid" style={{ width: 200 }} />
      <img src={Kenzie} alt="Kenzie Certification" className="img-fluid" style={{ width: 200 }} />
      <img src={FCC} alt="Free Code Camp Certification" className="img-fluid" style={{ width: 200 }} />
      </Fragment>
    );
  }
  
}

export default Post;