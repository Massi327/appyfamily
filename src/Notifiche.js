import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import profile1 from "./images/profile1.svg";
import profile2 from "./images/profile2.svg";
import profile3 from "./images/profile3.svg";
import profile4 from "./images/profile4.svg";
import profile5 from "./images/profile5.svg";
import profile6 from "./images/profile6.png";
import follow from "./images/follow.svg";
import NavigbarP from "./components/navbar-profile";
import NavigbarBottom from "./components/navbar-bottom";
import "./Notifiche.css";
import profileunselected from "./images/Profile-unselected.svg";
import calendarunselected from "./images/Calendar.svg";
import settingsunselected from "./images/Settings.svg";
import homeunselected from "./images/home-unselected.svg"
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import notifselected from "./images/notificationsselected.svg";
export default function Notifiche(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container className="bg-n">
            <NavigbarP vnotifications={notifselected} vmessages={message} vtutorial={help}/>
            <Container >
                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' ,marginTop: '7em',  borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile6} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Jeremy_Clarks</Card.Text>

                        <Row>
                            <Col className="subtitle-connections" style={{textAlign: 'left'}}>
                                started following you.
                            </Col>
                            <Col>                       <Link to={"/follower"}> <img src={follow} alt="Follower" /></Link>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>

                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile3} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Gina_Martin</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            will partecipate in your event.                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile4} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Clara_May_92</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            is interested in your event.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile1} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Jane_Austen</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            invited you to her event.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}}>
                    <Card.Img  src={profile5} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Santy_Chanty_Maybe</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            replied to your question.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile3} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Gina_Martin</Card.Text>
                        <Row>
                            <Col className="subtitle-connections" style={{textAlign: 'left'}}>
                                started following you.
                            </Col>
                            <Col>                       <Link to={"/follower"}> <img src={follow} alt="Follower" /></Link>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>


                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '5em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile2} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Doctor_Sally</Card.Text>
                        <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                            replied to your question.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected} settings={settingsunselected}/>
        </Container>
    )

}