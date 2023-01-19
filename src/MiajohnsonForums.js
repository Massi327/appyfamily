import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card, Modal, CardGroup, Accordion} from "react-bootstrap";
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
import {cancelBooking, selected} from "./Action";
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
import centereventsselected from "./images/Profile_events_selected.svg";
import centerblogs from "./images/Profile_blogs.svg";
import centercalendar from "./images/Profile_calendar.svg";
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import addicon from "./images/Add-icon.svg";
import centerforums from "./images/Profile_Forums_unselected.svg";
import centerforumsselected from "./images/Profile_Forums.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import profileMia from "./images/miajohnson.svg"
import calendarunselected from "./images/Calendar.svg";
import profileunselected from "./images/Profile-unselected.svg";
import settingsunselected from "./images/Settings.svg";
import backarrow from "./images/backarrow.svg";
import centerevents from "./images/Profile_events.svg";
import profile2 from "./images/profile2.svg";
import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import {useAccordionButton} from "react-bootstrap/AccordionButton";

export default function MiaJohnsonForums(){

    const [state,dispatch] = useContext(StateContext)

    const [prenotazione, setPrenotazione] = useState(() => {
        const prenotazione = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazione} )

    let forum = [ {
        key: 100,
        titolo: 'Activity ideas for my 6 months old child during long car trips?',
        about: '4 weeks ago • Mia Johnson'
    },
    ];


    let events = [];
    prenotazione.map(p => {
        let event={
            key: p.key,
            titolo: p.titolo,
            dataStart: moment(p.dataStart,'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
            dataEnd: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
            address: p.address,
            about: p.about,
            categoria: p.categoria,
            property: p.property
        }
        events.push(event)
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_second, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const [show_third, setShowThird] = useState(false);
    const handleCloseThird = () => setShowThird(false);
    const handleShowThird = () => setShowThird(true);

    const [show_fourth, setShowFourth] = useState(false);
    const handleCloseFourth = () => setShowFourth(false);
    const handleShowFourth = () => setShowFourth(true);

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop:"6.5em"}}>
                <Row>
                    <Col xs={1}>
                        <Link to={"/people"}><img src={backarrow} style={{left:"2em"}}/></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>



            <Container className="bg2" style={{paddingTop:"0.5em"}}>


                <Card className="post1" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profileMia} style={{height: '8em', width: '8rem'}} />
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Jane_Austen</Card.Title>
                        <Card.Text style={{textAlign: 'left'}}>Mia Johnson</Card.Text>
                        <Card.Text className="connections" style={{textAlign: 'left', marginTop:"-1em"}}>
                            126 connections
                        </Card.Text>
                        <Row>
                            <Col xs={4}>
                                <Button style={{fontSize:"15px", marginTop: "-1em", borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0.5em"}}>
                                    Follow
                                </Button>
                            </Col>
                            <Col xs={4}>
                                <Button style={{fontSize:"15px", marginTop: "-1em", borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0em"}}>
                                    Message
                                </Button>
                            </Col>
                            <Col>

                            </Col>


                        </Row>

                    </Card.Body>
                </Card>


            </Container>
            <Card>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/miajohnson"}><span><img src={centerevents} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/miajohnsonforums"}><span><img src={centerforumsselected} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>
            </Card>

            {forum.slice(0).reverse().map( f =>

                <Accordion>
                    <Card>
                        <Card.Header style={{minHeight:"4.5em"}}>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>{f.titolo}</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  className="subtitle-connections" style={{textAlign:"left"}}>{f.about}
                                    </Col>
                                </Row >
                                <Row style={{height:"1em"}}>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>
                                        <Link className="reply" style={{textDecoration:"none"}}>Reply</Link>
                                    </Col>
                                    <Col xs={5}>
                                        <CustomToggle eventKey="0">View Replies</CustomToggle>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-1em", flexDirection: 'row'}}>
                                <Card.Img  src={profile2} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                <Card.Body>
                                    <Card.Text className="blog-title" style={{textAlign: 'left'}}>It's used to prevent your baby's teeth from getting damaged</Card.Text>

                                    <Card.Text>
                                        <Row style={{height:"1em"}}>
                                            <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                3 weeks ago • Sullivan Jayden
                                            </Col>
                                        </Row>
                                        <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                            <Col xs={7}>

                                            </Col>
                                            <Col xs={3}>

                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                                <Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"0.5em", flexDirection: 'row'}}>
                                    <Card.Img  src={profile1} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>You should absolutely use it!</Card.Text>
                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    2 weeks ago • Mia Johnson
                                                </Col>
                                            </Row>
                                            <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                                <Col xs={7}>

                                                </Col>
                                                <Col xs={3}>

                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>



                                <Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"0.5em", flexDirection: 'row'}}>
                                    <Card.Img  src={profile4} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>My baby hates it</Card.Text>
                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    4 days ago • Clara May
                                                </Col>
                                            </Row>
                                            <Row style={{height:"1em", marginTop:"-0.1em"}}>
                                                <Col xs={7}>

                                                </Col>
                                                <Col xs={3}>

                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>

            )}
            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected} settings={settingsunselected}/>


        </Container>
    )

}


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            className="reply"
            style={{borderWidth:"0px", backgroundColor: "#f7f7f7"}}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}


