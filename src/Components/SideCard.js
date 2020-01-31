import React, { Fragment } from 'react';
import JSimg from './Images/jsicon.jpeg'
import CSSimg from './Images/cssicon.png'
import HTMLimg from './Images/htmlicon.png'
import Reactimg from './Images/reacticon.png'
import Nodeimg from './Images/nodejsicon.png'
import Bootstrapimg from './Images/bootstrapicon.png'
import Mainimg from './Images/mainIMG.jpg'
import Gitlabimg from './Images/gitlabicon.png'
import Githubimg from './Images/githubicon.png'
import Gitimg from './Images/giticon.png'


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
        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>SE Student, Camden, South Carolina</CardSubtitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Software engineering student learning new hacks one day at a time. Problem solving, coding and carpentry are my passions. </CardText>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>amanda.stork@gmail.com<br/>803-397-0535</CardText>
        <img src={HTMLimg} alt="JS Icon" className="img-fluid" style={{ width: 36 }} />
        <img src={JSimg} alt="JS Icon" className="img-fluid" style={{ width: 34 }} />
        <img src={CSSimg} alt="JS Icon" className="img-fluid" style={{ width: 36 }} />
        <img src={Reactimg} alt="JS Icon" className="img-fluid" style={{ width:39 }} />
        <img src={Nodeimg} alt="JS Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Bootstrapimg} alt="JS Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Gitlabimg} alt="JS Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Githubimg} alt="JS Icon" className="img-fluid" style={{ width:36 }} />
        <img src={Gitimg} alt="JS Icon" className="img-fluid" style={{ width:36 }} />
      </CardBody>
    </Card>
    
  </Fragment>
);

export default SideCard;