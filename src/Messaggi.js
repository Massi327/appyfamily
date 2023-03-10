import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link, useNavigate} from "react-router-dom";
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
import messageselected from "./images/messagesselected.svg"
import calendar from "./images/Calendar.svg";
import settingsselected from "./images/Settings-selected.svg";
import backarrow from "./images/backarrow.svg";
export default function Notifiche(){

    const [state,dispatch] = useContext(StateContext)
    const navigate = useNavigate();

    return(
        <Container className="bg-n">
            <NavigbarP vnotifications={notif} vmessages={messageselected} vtutorial={help}/>
            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected} settings={settingsunselected}/>

            <Container className="bg2" style={{paddingTop:"6.5em", borderRadius:'1em'}}>
                <Row>
                    <Col xs={1}>
                        <img src={backarrow} style={{left:"4em", height:'2em', width:'2em'}} onClick={()=> navigate(-1)}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container style={{paddingTop:"1em"}}>

                <Link to={"/chat"} style={{textDecoration: 'none', color:'black'}}>
                 <Card className="notif"  style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile1} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body >
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Jane_Austen</Card.Text>
                        <Card.Text className="subtitle-random" style={{textAlign: 'left'}}>
                            Hi Sophia! We met at your picnic...
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>

                <Link to={"/chatsully"} style={{textDecoration: 'none', color:'black'}}>
                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile2} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Doctor_Sally</Card.Text>
                        <Card.Text className="subtitle-random" style={{textAlign: 'left'}}>
                            Thank you for your help! I was so...
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>

                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile4} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Clara_May_92</Card.Text>
                        <Card.Text className="subtitle-random" style={{textAlign: 'left'}}>
                            Amazing! See you there!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="notif" style={{ width: '22.8rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}}>
                    <Card.Img  src={profile5} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Santy_Chanty_Maybe</Card.Text>
                        <Card.Text className="subtitle-random" style={{textAlign: 'left'}}>
                            Thanks. He feels better now, don't...
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>

        </Container>
    )

}