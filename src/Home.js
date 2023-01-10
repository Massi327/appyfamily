import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Image, Nav, Navbar, Row} from "react-bootstrap";
import img_1 from "./img_1.png";
import "./Home.css";
import logo from './images/APPy family-logo.png';
import notif from './images/notifications-icon.svg';
import message from './images/messages-icon.svg';
import help from './images/help-icon.svg'

import people from './images/People.svg'
import blogs from './images/Blogs.svg'
import hashtags from './images/Hashtags.svg'
import recbut from './images/recommended-button.svg'
import nearme from './images/near-me.svg'
import ellipse from './images/Ellipse-bottom-menu.svg'
import home from './images/Home-icon.svg'
import add from './images/Add.svg'
import addicon from './images/Add-icon.svg'
import calendar from './images/Calendar.svg'
import profile from './images/Profile.svg'
import settings from './images/Settings.svg'
import clock from './images/Clock.svg'
import map from './images/Map.svg'
import imgcard2 from './images/Image-event-2.svg'
import imgcard1 from './images/Image-event-1.svg'
import Navigbar from "./components/navbar-search";
import NavigbarBottom from "./components/navbar-bottom";
import AddButton from "./components/add-button";
import eventsselected from "./images/Events-selezionato.svg";


export default function Home(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container className="background">
            <Navigbar vevents={eventsselected}
                      vblogs={blogs}
                      vpeople={people}
                      vhashtags={hashtags}/>

            <Container className="background2">


            <Card className="post" style={{ width: '21rem', height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                <Card.Img className="cardimg" src={imgcard1} style={{height: '8em', width: '10rem'}} />
                <Card.Body>
                    <Card.Text className="event-time-1" style={{textAlign: 'left'}}>JAN 7 • 10AM</Card.Text>
                    <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Play in the Park</Card.Title>
                    <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                        Hosted by the Muse Th.
                    </Card.Text>
                    <Card.Text className="event-subsubtitle-1" style={{textAlign: 'left'}}>
                        Public
                    </Card.Text>
                    <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                        <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                    </Card.Text>
                    <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                        <img src={map} alt="Near me" className="icon"/> 112 Barrack Street, NR3 1TX, UK
                    </Card.Text>
                </Card.Body>
            </Card>

                <Card className="post" style={{ width: '21rem', height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img className="cardimg" src={imgcard2} style={{height: '8em', width: '10rem'}} />
                    <Card.Body>
                        <Card.Text className="event-time-1" style={{textAlign: 'left'}}>JAN 7 • 5PM</Card.Text>
                        <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Music therapy</Card.Title>
                        <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                            Hosted by Color Notes
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-1" style={{textAlign: 'left'}}>
                            Public
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={map} alt="Near me" className="icon"/> 112 Barrack Street, NR3 1TX, UK
                        </Card.Text>
                    </Card.Body>
                </Card>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>



        </Container>

            <AddButton/>
            <NavigbarBottom value="Home"/>


    </Container>
    )

}