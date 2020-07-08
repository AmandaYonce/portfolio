import React, {Component} from 'react';
import { Card, CardBody, CardImg,
    CardTitle, CardText, Row, Col} from 'reactstrap';
import "./projects.css"
import Kestrel from "./Images/kestrel.png"
import JSimg from './Images/jsicon.jpeg'
import CSSimg from './Images/cssicon.png'
import HTMLimg from './Images/htmlicon.png'
import Reactimg from './Images/reacticon.png'
// import Nodeimg from './Images/nodejsicon.png'
import Bootstrapimg from './Images/bootstrapicon.png'
import Python from "./Images/pythonicon.png"
import Firebase from "./Images/firebaseicon.png"
import Redux from "./Images/reduxicon.png"
import Actzone from "./Images/actzone.png"
import InfMol from "./Images/InfMol.png"
import Portfolio from "./Images/Porfolio.png"
import GitUser from "./Images/gitUser.png"
import PhotosHere from "./Images/photoshere.png"




class Projects extends Component {
    render() {
      return (
        <>
            <Row id="row" xs="3">
            <Col>
                    <Card id="card">
                        <CardBody>
                            <CardImg top width="100%" src={Portfolio} alt="This Portfolio" />
                            <CardTitle>This Portfolio</CardTitle>
                            <img src={Reactimg} alt="React Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={Firebase} alt="Firebase Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={Bootstrapimg} alt="Bootstrap Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={CSSimg} alt="CSS Icon" className="img-fluid" style={{ width: 36 }} />
                            <CardText>See the code for this portfolio</CardText>
                            <a href="https://amandayoncesc.gitlab.io/kwitter/" >Project Repo</a> <br/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <CardBody>
                            <CardImg style={{border: "1px solid black"}} top width="100%" src={InfMol} alt="Infamouse Molecules" />
                            <CardTitle>Molecule Fuel</CardTitle>
                            <img src={Python} alt="Python Icon" className="img-fluid" style={{ width: 36 }} />
                            <CardText>I was the first student at Kenzie to solo complete this project building a python program that measures the largest blank space possibly created between 4 connecting molecule chains.  The file contains a test input and test output file to check results.</CardText>
                            <a href="https://github.com/AmandaYonce/InfamousMolecules" >Project Repo</a> <br/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <CardBody>
                            <CardImg top width="100%" src={Kestrel} alt="Kestrel Microblog" />
                            <CardTitle>A Microblog Social Media Project</CardTitle>
                            <img src={Reactimg} alt="React Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={Redux} alt="Redux Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={Bootstrapimg} alt="Bootstrap Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={CSSimg} alt="CSS Icon" className="img-fluid" style={{ width: 36 }} />
                            <CardText>This was a 3 member group project that I completed during my 2nd Quarter with Kenzie Academy.  I acted as the Scrum Master on this project.  Please feel free to register a new user or use Google Registration to access the site, like a post, post a message and build up your friends list to test functionality.</CardText>
                            <a href="https://amandayoncesc.gitlab.io/kwitter/" >Live Website</a> <br/>
                            <a href="https://github.com/AmandaYonce/kestrel" >Project Repo</a> <br/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <CardBody>
                            <CardImg top width="100%" src={PhotosHere} alt="Photos From " />
                            <CardTitle>Photos From Here</CardTitle>
                            <img src={JSimg} alt="Javascript Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={HTMLimg} alt="HTML Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={CSSimg} alt="CSS Icon" className="img-fluid" style={{ width: 36 }} />
                            <CardText>A solo project I completed retrieving the users current location and then accessing photos taken close to that location.</CardText>
                            <a href="https://amandayonce.github.io/PhotosFromHere/" >Live Website</a> <br/>
                            <a href="https://github.com/AmandaYonce/PhotosFromHere" >Project Repo</a> <br/>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card id="card">
                        <CardBody>
                            <CardImg top width="100%" src={Actzone} alt="Activity Zone" />
                            <CardTitle>Activity Zone</CardTitle>
                            <img src={JSimg} alt="Javascript Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={HTMLimg} alt="HTML Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={CSSimg} alt="CSS Icon" className="img-fluid" style={{ width: 36 }} />
                            <CardText>A solo project I completed very early in my programming experience, during my first quarter at Kenzie.  I am particularly proud of the Word Search game and I have not updated the code since I first wrote this program.</CardText>
                            <a href="https://amandayonce.github.io/activityZone/" >Live Website</a> <br/>
                            <a href="https://github.com/AmandaYonce/activityZone" >Project Repo</a> <br/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <CardBody>
                            <CardImg style={{border: "1px solid black"}} top width="100%" src={GitUser} alt="Github User API" />
                            <CardTitle>Github User API</CardTitle>
                            <img src={JSimg} alt="Javascript Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={HTMLimg} alt="HTML Icon" className="img-fluid" style={{ width: 36 }} />
                            <img src={CSSimg} alt="CSS Icon" className="img-fluid" style={{ width: 36 }} />
                            <CardText>A program that pings the github api as you type in a user's name and retrieves a list of possible users.  Once you click on a user name it will then retrieve that user's github profile information.</CardText>
                            <a href="https://amandayonce.github.io/GithubUserSearch/" >Live Website</a> <br/>
                            <a href="https://github.com/AmandaYonce/GithubUserSearch/tree/master" >Project Repo</a> <br/>
                        </CardBody>
                    </Card>
                </Col>
                </Row> 
        </>
)
}
}

export default Projects;