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
import centerblogsselected from "./images/Profile_blogs_selected.svg"
import centercalendar from "./images/Profile_calendar.svg"
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import centerforumsselected from "./images/Profile_Forums.svg";

import centerprofileimage from "./images/cus_torino.svg"
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import profile2 from "./images/profile2.svg";
import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import {useAccordionButton} from "react-bootstrap/AccordionButton";
import cusimage from "./images/CUS.svg"
import backarrow from "./images/backarrow.svg";
import profile5 from "./images/profile5.svg";


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

export default function CenterBlogs(){

    const [state,dispatch] = useContext(StateContext)

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
                                <Link to={"/centerevents"}><span><img src={centerevents} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centerblogs"}><span><img src={centerforumsselected} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centercalendar"}><span style={{borderBottomWidth:"2px", borderBottomColor:"black"}}><img src={centercalendar} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>


            <CardGroup style={{textAlign:"left"}}>
                <Card.Text style={{ paddingLeft:"1em", marginBottom:"-0em", marginTop:"1em", color:"white", backgroundColor:"#4b7bf8"}}>Cus Torino replied to this closed forum</Card.Text>
                <Accordion>
                    <Card>
                        <Card.Header style={{minHeight:"4.5em"}}>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>Do kids need special shoes for tennis?</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  className="subtitle-connections" style={{textAlign:"left"}}>2 weeks ago • Gina Martin
                                    </Col>
                                </Row >
                                <Row style={{height:"1em"}}>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>

                                    </Col>
                                    <Col xs={5}>
                                        <CustomToggle eventKey="0">View Replies</CustomToggle>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Header>


                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-1em", flexDirection: 'row'}}>
                                <Card.Img  src={cusimage} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                <Card.Body>
                                    <Card.Text className="blog-title" style={{textAlign: 'left'}}>Yes they do</Card.Text>

                                    <Card.Text>
                                        <Row style={{height:"1em"}}>
                                            <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                2 weeks ago • CUS Torino
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
                                    <Card.Img  src={profile5} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>try Decathlon</Card.Text>
                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    2 weeks ago • Chandler Santoro
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
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>or Sportsdirect</Card.Text>
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


                <Card.Text style={{ paddingLeft:"1em", marginBottom:"-0em", marginTop:"1em", color:"white", backgroundColor:"#4b7bf8"}}>Cus Torino replied to this closed forum</Card.Text>
                <Accordion>
                    <Card>
                        <Card.Header style={{minHeight:"4.5em"}}>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>When is the women 10km?</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  className="subtitle-connections" style={{textAlign:"left"}}>1 year ago • Jade Lee
                                    </Col>
                                </Row >
                                <Row style={{height:"1em"}}>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>

                                    </Col>
                                    <Col xs={5}>
                                        <CustomToggle eventKey="0">View Replies</CustomToggle>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Header>


                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-1em", flexDirection: 'row'}}>
                                <Card.Img  src={cusimage} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                <Card.Body>
                                    <Card.Text className="blog-title" style={{textAlign: 'left'}}>On Monday 8 March</Card.Text>

                                    <Card.Text>
                                        <Row style={{height:"1em"}}>
                                            <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                2 weeks ago • CUS Torino
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
                                    <Card.Img  src={profile5} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                                    <Card.Body>
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>8 March</Card.Text>
                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    2 weeks ago • Chandler Santoro
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

                <Card.Text style={{ paddingLeft:"1em", marginBottom:"-0em", marginTop:"1em", color:"white", backgroundColor:"#4b7bf8"}}>Cus Torino replied to this forum</Card.Text>
                <Accordion>
                    <Card>
                        <Card.Header style={{minHeight:"4.5em"}}>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>Are there any dance courses for 3 year olds?</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  className="subtitle-connections" style={{textAlign:"left"}}>2 years ago • Jennifer Mosby
                                    </Col>
                                </Row >
                                <Row style={{height:"1em"}}>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>

                                    </Col>
                                    <Col xs={5}>
                                        <CustomToggle eventKey="0">View Replies</CustomToggle>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Header>


                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Card className="people" style={{marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0px', margin:"-0.5em", marginTop:"-1em", flexDirection: 'row'}}>
                                <Card.Img  src={cusimage} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />

                                <Card.Body>
                                    <Card.Text className="blog-title" style={{textAlign: 'left'}}>We have a class that might interest you</Card.Text>

                                    <Card.Text>
                                        <Row style={{height:"1em"}}>
                                            <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                2 weeks ago • CUS Torino
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
                                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>my daughter loves this course</Card.Text>
                                        <Card.Text>
                                            <Row style={{height:"1em"}}>
                                                <Col  className="subtitle-connections" style={{textAlign:"left"}}>
                                                    2 days ago • Clara May
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













            </CardGroup>



            </Card>
            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profile} settings={settings}/>



        </Container>
    )

}