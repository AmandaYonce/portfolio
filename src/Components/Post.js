import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';


class Post extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">My Journey</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>From Sautee to Scripts</CardSubtitle>
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>Originally from Surfside Beach, SC I graduated from Socastee High School in 1997.  I moved to Columbia, SC and attended the University of South Carolina for 3 years studying Business Management and ultimately began a career in the Hospitality industry that lasted 22 years and led to owning and operating my own restaurant for the latter 9 years. <br/><br/> Owning a small business has provided me with unique insights that I carry with me into this new chapter of my life.<br/> <br/>I enrolled with Kenzie Academy in 0ctober, 2019 to study Software Engineering.  I will complete my Front End Certificate in April, 2020, my Back End Certificate in Oct 2020 and I will graduate in October, 2020 with a Full Stack Software Engineering Certificate from Kenzie Academy & Butler University.  From day one at Kenzie I have excelled in all aspects of the curriculum.  Kenzie has a unique teaching method that is preparing its students to have all of the necessary tools to succeed in a SE environment.  During my second quarter at Kenzie i was hired by the school as a student coach.  I enjoy mentoring new developers through troubleshooting and delivering apps using HTML, CSS, JavaScript,  and React/Redux.  I have attended Kenzie as a remote student and this has provided me with a great introduction to life as a remote SE. I am a self taught carpenter and in my spare time I enjoy building unique custom furniture.  I often find many similarities between the design issues I encounter in coding and in my carpentry work. <br/><br/> I excell at problem solving and working in a team environment.  My goal is to acquire a remote SE position with a company that values its employees and encourages continued learning in a positive environment.</CardText>
      </CardBody>
      </Fragment>
    );
  }
  
}

export default Post;