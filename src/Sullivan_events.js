import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card, Modal, CardGroup, Dropdown} from "react-bootstrap";
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
import {cancelBooking, nonPartecipo, partecipo, selected} from "./Action";
import imgcard4 from "./images/Image-event-4.svg";
import moment from "moment";
import popupsport from "./images/image 1.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline.svg";

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

import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import profile3 from "./images/profile3.svg";
import imgcard2 from "./images/Image-event-2.svg";
import imgcard5 from "./images/Image-event-5.svg";
import other from "./images/other.svg";
import music from "./images/music.svg";
import party from "./images/party.svg";
import sport from "./images/sport.svg";
import {useLocalStorage} from "./useLocalStorage";
import going from "./images/going.svg"
import whosgoing from "./images/whosgoing-white.svg";
import sullivan from "./images/sullivan.svg"


export default function SullivanEvents() {

    const [state, dispatch] = useContext(StateContext)

    const cardh = [
        {   key: Math.random(),
            titolo:'Open air rehabilitation',
            dataStart:moment('2023-05-02, 10:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-05-02, 11:00','YYYY-MM-DD, hh:mm'),
            address:'112 Apple Street, NR3 1TX, UK',
            host:'Hosted by Sullivan Jayden',
            about:'Fresh air and activities are very important for this type of rehabilitation' ,
            categoria: 'Other',
            img: 'imgcard1',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: Math.random(),
            titolo:'Sound of silence',
            dataStart:moment('2023-02-27, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-27, 18:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            host:'Hosted by Sullivan Jayden',
            about:'A music activity for deaf children',
            categoria: 'Music',
            img: 'imgcard2',
            partecipo: 'false',
            property: 'Esterno'
        },

    ]



    return (
        <Container style={{backgroundColor: "#f5f5f5", zIndex: '-1000', minHeight: '100vh', top: '5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop: "6.5em"}}>
                <Row>
                    <Col xs={1}>
                        <Link to={"/people"}><img src={backarrow} style={{left: "2em"}}/></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


            <Container className="bg2" style={{paddingTop: "0.5em"}}>


                <Card className="post1" style={{
                    width: '100%',
                    height: '8rem',
                    marginTop: '0em',
                    marginBottom: '1em',
                    borderRadius: '10px',
                    borderWidth: '0',
                    flexDirection: 'row'
                }}>
                    <Card.Img src={sullivan} style={{height: '8em', width: '8rem'}}/>
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Doctor_Sally</Card.Title>
                        <Card.Text style={{textAlign: 'left'}}>Sullivan Jayden</Card.Text>
                        <Card.Text className="connections" style={{textAlign: 'left', marginTop: "-1em"}}>
                            Bronze, 256 connections
                        </Card.Text>
                        <Row>
                            <Col xs={4}>
                                <Button style={{
                                    fontSize: "15px",
                                    marginTop: "-1em",
                                    borderColor: "#eb506c",
                                    color: "white",
                                    backgroundColor: "#eb506c",
                                    borderWidth: "2px",
                                    borderRadius: "10px",
                                    marginRight: "0.5em"
                                }}>
                                    Follow
                                </Button>
                            </Col>
                            <Col xs={4}>
                                <Button style={{
                                    fontSize: "15px",
                                    marginTop: "-1em",
                                    borderColor: "#eb506c",
                                    color: "white",
                                    backgroundColor: "#eb506c",
                                    borderWidth: "2px",
                                    borderRadius: "10px",
                                    marginRight: "0em"
                                }}>
                                    Message
                                </Button>
                            </Col>
                            <Col>

                            </Col>


                        </Row>

                    </Card.Body>
                </Card>


            </Container>
            <Card style={{paddingBottom: "10em"}}>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/sullivanevents"}><span><img src={centereventsselected} alt="Events"
                                                                    className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/sullivanforum"}><span><img src={centerforums} alt="Events"
                                                                          className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

            </Card>


            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected}
                            settings={settingsunselected}/>


        </Container>
    )

}