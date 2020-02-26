import React, {Component} from 'react';
import Header from './Header';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Container, Row } from 'reactstrap';

class Resume extends Component {
    render() {
      return (
        <React.Fragment>
        <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
            <Card>
            <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Resume</CardTitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '1rem' }}>Amanda Yonce</CardSubtitle>
                <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>803-397-0535 <br/><br/>amanda.stork@gmail.com<br/><br/><strong>Career Path:</strong> Software Engineering<br/><br/><strong>Abilities:</strong> Microsoft Office, JavaScript, HTML 5, CSS 3, Photoshop, Illustrator, VS Code, Atom, GIMP, Git, Gitlab, Github, React, Redux, Bootstrap, NodeJS, NPM, Yarn, Homebrew, strong analytical and problem solving skills, excellent communication skills, flexibility to adapt in a fast-paced work environment, work well in a team environment, able to architect technical approaches and adapt with feedback<br/><br/>
                <ul className="list-unstyled">
                    <li><strong>Education: </strong></li>
                    <li>October, 2019-Present</li>
                    <li>Kenzie Academy / Butler University </li>
                    <li>Front End Developer Expected Graduation – April, 2020</li>
                    <li>Full Stack Software Engineering Expected Graduation – October, 2020</li>
                </ul> 
                <ul className="list-unstyled">
                    <li>November, 2019</li>
                    <li>Responsive Web Design Certificate</li>
                    <li> Free Code Camp</li>
                </ul>
               
                <ul className="list-unstyled">
                    <li>1998-2001</li>
                    <li>University of South Carolina Columbia, SC</li>
                    <li>Major in Business Administration</li>
                </ul>
                
                <ul className="list-unstyled">
                    <li>1993-1997</li>
                    <li>Socastee High School Myrtle Beach, SC</li>
                    <li>High School Diploma</li>
                </ul>
                <ul className="list-unstyled">
                    <li><strong>Experience: </strong></li>
                    <li>Student Coach- Kenzie Academy</li>
                    <li>January, 2020-Current</li>
                    <li>In this position I am a coach to software engineering students to help troubleshoot and debug their projects.  I offer guidance on how to use research tools in addition to mentoring students to ensure their success.</li>
                </ul>
               
                <ul className="list-unstyled">
                    <li>Owner-Camden Mercantile DIY Craft Studio </li>
                    <li>2017-December, 2019</li>
                    <li>I operated a DIY Craft Workshop Studio that provided a variety of painting and crafting workshops. I created digital designs based on customer requests and transferred them to stencils or wood cutouts. Customers came to my studio to create their unique product with my instruction. </li>
                    <li></li>
                </ul>
                <ul className="list-unstyled">
                    <li>Restaurant Owner- Hifalutin Camden, SC</li>
                    <li>2010-2018</li>
                    <li>Owned and operated my own restaurant. Building my business from the ground up. This required an ability to tackle a wide array of projects every day. From accounting to marketing, hiring to training, fixing equipment to engaging with customers. My success was a result of my strong sales and creative marketing ability coupled with my drive for achievement and a never give up attitude. </li>
                    <li></li>
                </ul>
                <ul className="list-unstyled">
                    <li>Paralegal</li>
                    <li>2003-2008</li>
                    <li>Richardson Plowden Carpenter & Robinson Columbia, SC</li>
                </ul>
               
                 </CardText>
                </CardBody>
            </Card>
        </Row>
      </Container>
    </main>
        </React.Fragment>
      )}
}

export default Resume


