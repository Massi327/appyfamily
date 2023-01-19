import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card, Modal, CardGroup, CloseButton} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";
import NavigbarP from "./components/navbar-profile";
import eventsselected from "./images/Events-selezionato.svg";
import blogs from "./images/Blogs.svg";
import people from "./images/People.svg";
import hashtags from "./images/Hashtags.svg";
import "./Profile.css";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import profile from "./images/Profile-unselected.svg";
import ribbon from './images/ribbon_icon.png'
import NavbarProfile from "./components/navbar-profile";
import eventsp from "./images/Profile_events.svg";
import blogsp from './images/Profile_blogs.svg'
import profileselected from './images/Profile-selected.svg'
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import settings from "./images/Settings.svg";
import homeunselected from "./images/home-unselected.svg"
import {selected} from "./Action";
import imgcard4 from "./images/Image-event-4.svg";
import moment from "moment";
import popupsport from "./images/image 1.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline.svg";
import whosgoing from "./images/material-symbols_emoji-people-rounded.svg";
import dropdown from "./images/gridicons_dropdown.svg";
import ProfileO from "./components/profile-options";
import CardHeader from "react-bootstrap/CardHeader";
import centerevents from "./images/Profile_events.svg"
import centerblogs from "./images/Profile_blogs.svg"
import centercalendar from "./images/Profile_calendar.svg"
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import centereventsselected from "./images/Profile_events_selected.svg"
import centerprofileimage from "./images/cus_torino.svg"
import centerforums from "./images/Profile_Forums_unselected.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";

import fencing from "./images/Fencing.svg"
import dance from "./images/Dance.svg"
import longjump from "./images/LongJump.svg"
import backarrow from "./images/backarrow.svg"
import {navigate} from "react-big-calendar/lib/utils/constants";

export default function CenterEvents(){

    const [state,dispatch] = useContext(StateContext)

    const [prenotazione, setPrenotazione] = useState(() => {
        const prenotazione = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazione} )

    let events = [];
    prenotazione.map(p => {
        let event={
            key: p.key,
            titolo: p.titolo,
            dataStart: moment(p.dataStart,'YYYY-MM-DD, hh:mm').toDate(),
            dataEnd: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').toDate(),
            address: p.address,
            about: p.about,
            categoria: p.categoria
        }
        events.push(event)
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container style={{backgroundColor:"#f5f5f5", paddingBottom:"10em", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop:"6.5em"}}>
                <Row>
                    <Col xs={1}>
                        <Link to={"/hashtags"}><img src={backarrow} style={{left:"2em"}}/></Link>
                    </Col>
                    <Col></Col>
                </Row>


                <Card className="post" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={centerprofileimage} style={{height: '8em', width: '8rem'}} />
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>CUS Torino</Card.Title>
                        <Card.Text className="connections" style={{textAlign: 'left'}}>
                            Centro Universitario Sportivo
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <Card>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/centerevents"}><span><img src={centereventsselected} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centerblogs"}><span><img src={centerforums} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centercalendar"}><span style={{borderBottomWidth:"2px", borderBottomColor:"black"}}><img src={centercalendar} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

                <Card className="post" style={{ height: '8rem',  paddingTop:"1em", marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img className="cardimg" src={longjump} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
                    <Card.Body>

                        <Card.Text className="event-time-1">
                            <Row>
                                <Col>
                                    <h5 style={{textAlign:"left"}}>JAN 7 • 10AM </h5>
                                </Col>
                                <Col xs={2}>
                                    <img src={threedots} style={{textAlign:"right"}}/>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Long jump race</Card.Title>
                        <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                            Hosted by CUS Torino
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={map} alt="Near me" className="icon"/> Regent Park, LN3 1TX, UK
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="post" style={{ height: '8rem', marginBottom: '1em' ,  paddingTop:"1em", borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img className="cardimg" src={dance} style={{height: '8em', width: '9rem', verticalAlign:'center', marginLeft:"0.5em"}} />
                    <Card.Body>

                        <Card.Text className="event-time-1">
                            <Row>
                                <Col>
                                    <h5 style={{textAlign:"left"}}>DEC 20 • 10AM </h5>
                                </Col>
                                <Col xs={2}>
                                    <img src={threedots} style={{textAlign:"right"}}/>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Dance with us</Card.Title>
                        <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                            Hosted by CUS Torino
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={map} alt="Near me" className="icon"/> 12 Blue Street, BN3 6IX, UK
                        </Card.Text>
                    </Card.Body>
                </Card>


                <CardGroup>

                    <Card className="post" style={{ height: '8rem', marginBottom: '1em' ,  paddingTop:"1em", borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Img className="cardimg" src={fencing} style={{height: '8em', width: '9rem', verticalAlign:'center', marginLeft:"0.5em", marginTop:'-0.5em'}} />
                        <Card.Body>

                            <Card.Text className="event-time-1">
                                <Row>
                                    <Col>
                                        <h5 style={{textAlign:"left"}}>NOV 3 • 6PM </h5>
                                    </Col>
                                    <Col xs={2}>
                                        <img src={threedots} style={{textAlign:"right"}}/>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Dance with us</Card.Title>
                            <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                                Hosted by CUS Torino
                            </Card.Text>
                            <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                            </Card.Text>
                            <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                <img src={map} alt="Near me" className="icon"/> 12 Blue Street, BN3 6IX, UK
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </Card>
            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profile} settings={settings}/>


        </Container>
    )

}