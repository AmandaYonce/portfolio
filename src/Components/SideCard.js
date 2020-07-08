import React, { Fragment } from 'react';
import JSimg from './Images/jsicon.jpeg'
import CSSimg from './Images/cssicon.png'
import HTMLimg from './Images/htmlicon.png'
import Reactimg from './Images/reacticon.png'
import Nodeimg from './Images/nodejsicon.png'
import Bootstrapimg from './Images/bootstrapicon.png'
import Mainimg from './Images/headshot.jpeg'
import Gitlabimg from './Images/gitlabicon.png'
import Githubimg from './Images/githubicon.png'
import Gitimg from './Images/giticon.png'
import Salesforce from "./Images/salesforce.png"
import Python from "./Images/pythonicon.png"
import Firebase from "./Images/firebaseicon.png"
import Redux from "./Images/reduxicon.png"
import Slack from "./Images/slack.png"
import Django from "./Images/django.png"
import Mongo from "./Images/mongodb.png"
import VS from "./Images/vscode.png"
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const SideCard = () => (
  <Fragment>
    
    <Card>
      <CardImg top width="100%" src={Mainimg} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Amanda Yonce</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.9rem' }}>Full Stack Developer</CardSubtitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.9rem' }}>Certified Salesforce Administrator</CardSubtitle>
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>Problem solving, coding, photography, kayaking and carpentry are my passions. </CardText>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>amanda.stork@gmail.com<br/>803-397-0535<br/><a href = "https://github.com/AmandaYonce">GitHub: AmandaYonce<br/></a><a href="https://www.linkedin.com/in/amanda-yonce-33a29268/">LinkedIn</a></CardText>
        
        <img src={HTMLimg} alt="HTML Icon" className="img-fluid" style={{ width: 36 }} />
        <img src={JSimg} alt="JS Icon" className="img-fluid" style={{ width: 34 }} />
        <img src={CSSimg} alt="CSS Icon" className="img-fluid" style={{ width: 36 }} />
        <img src={Reactimg} alt="React Icon" className="img-fluid" style={{ width:39 }} />
        <img src={Redux} alt="Redux Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Python} alt="Python Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Mongo} alt="Mongo Icon" className="img-fluid" style={{ width:40 }} />
        <img src={Django} alt="Django Icon" className="img-fluid" style={{ width:34 }} />
        <img src={Nodeimg} alt="NodeJS Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Bootstrapimg} alt="Bootstrap Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Gitlabimg} alt="Gitlab Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Githubimg} alt="Github Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Gitimg} alt="Git Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Firebase} alt="Firebase Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Salesforce} alt="Salesforce Icon" className="img-fluid" style={{ width:40 }} />
        <img src={Slack} alt="Slack Icon" className="img-fluid" style={{ width:36 }} />
        <img src={VS} alt="VScode Icon" className="img-fluid" style={{ width:36 }} />
      </CardBody>
    </Card>
    
  </Fragment>
);

export default SideCard;