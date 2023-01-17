import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card, Modal, CardGroup} from "react-bootstrap";
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
import profileSofia from './images/sophia+ribbon.png'
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
import centerprofileimage from "./images/cus_torino.svg";
import CardHeader from "react-bootstrap/CardHeader";
import centerevents from "./images/Profile_events.svg";
import centerblogs from "./images/Profile_blogs.svg";
import centercalendar from "./images/Profile_calendar.svg";
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import addicon from "./images/Add-icon.svg";
import centerforums from "./images/Profile_Forums_unselected.svg";
import centerforumsselected from "./images/Profile_Forums.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";

export default function ProfileForums(){

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
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Row className="justify-content-sm-right" style={{zIndex:"1000"}}>
                <Col xs={10} md={1}>
                    <Link to={"/add"} style={{right: "2em"}}><span><img src={addicon} alt="Add"
                                                                        className="search-icon"/></span></Link>
                </Col>
            </Row>

            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>

            <Container className="bg2" style={{paddingTop:"7em"}}>


                <Card className="post1" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profileSofia} style={{height: '8em', width: '8rem'}} />
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Sophia_Wilkinson</Card.Title>
                        <Card.Text className="connections" style={{textAlign: 'left'}}>
                            Silver, 356 connections
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <Card>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/profile"}><span><img src={centerevents} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/profileforums"}><span><img src={centerforumsselected} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

                <Card className="post" style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img className="cardimg" src={imgcard1} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
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
                        <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Play in the Park</Card.Title>
                        <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                            Hosted by the Muse Th.
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={map} alt="Near me" className="icon"/> 112 Barrack Street, NR3 1TX, UK
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="post" style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img className="cardimg" src={imgcard1} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
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
                        <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Play in the Park</Card.Title>
                        <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                            Hosted by the Muse Th.
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={map} alt="Near me" className="icon"/> 112 Barrack Street, NR3 1TX, UK
                        </Card.Text>
                    </Card.Body>
                </Card>


                <CardGroup>

                    <Card className="post" style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Img className="cardimg" src={imgcard1} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
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
                            <Card.Title className="event-title-1" style={{textAlign: 'left'}}>Play in the Park</Card.Title>
                            <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                                Hosted by the Muse Th.
                            </Card.Text>
                            <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                            </Card.Text>
                            <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                <img src={map} alt="Near me" className="icon"/> 112 Barrack Street, NR3 1TX, UK
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </Card>
            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>

            <Container style={{marginTop:"15em"}}>
                <Button onClick={()=> console.log(state.prenotazioni)}>+</Button>
                {events.slice(0).reverse().map( p =>

                    <Card className="post" key={p.key} style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}} onClick={()=> {handleShow(); dispatch(selected(p.key))}}>
                        <Card.Img className="cardimg" src={imgcard4} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
                        <Card.Body>
                            <Card.Text className="event-time-1" style={{textAlign: 'left'}}>{moment(p.dataStart).locale('en').format('MMM D').toUpperCase()} • {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()}</Card.Text>
                            <Card.Title className="event-title-1" style={{textAlign: 'left'}}>{p.titolo}</Card.Title>
                            <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                                {p.about}
                            </Card.Text>
                            <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                <img src={clock} alt="Near me" className="icon"/> {moment(p.dataStart).locale('en').format('D MMM YYYY')}, {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()} - {moment(p.dataEnd).locale('en').format('h:mm a').toUpperCase()}
                            </Card.Text>
                            <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                <img src={map} alt="Near me" className="icon"/> {p.address}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )}

            </Container>



        </Container>
    )

}