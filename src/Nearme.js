import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import eventsselected from "./images/Events-selezionato.svg";
import blogs from "./images/Blogs.svg";
import people from "./images/People.svg";
import hashtags from "./images/Hashtags.svg";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import imgcard2 from "./images/Image-event-2.svg";
import nearmebut from "./images/nearme-button.svg";
import rec from "./images/Recommendedn.svg"
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";


export default function Nearme(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid styile={{height:"79vh"}}>
            <Navigbar vevents={eventsselected}
                      vblogs={blogs}
                      vpeople={people}
                      vhashtags={hashtags}
                      vrec={rec}
                      vnearme={nearmebut}
            />
            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>


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



            </Container>

        </Container>
    )

}