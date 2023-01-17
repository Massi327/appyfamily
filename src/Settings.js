import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";
import homeunselected from "./images/home-unselected.svg";
import calendar from "./images/Calendar.svg";
import profileunselected from './images/Profile-unselected.svg'
import settingsselected from './images/Settings-selected.svg'
import NavigbarP from "./components/navbar-profile";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import editprofile from "./images/Edit Profile.svg";
import logout from "./images/Logout.svg"
import "./Settings.css"

export default function Settings(){

    const [state,dispatch] = useContext(StateContext)

    return(

        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>

            <Container style={{paddingTop:"7em"}}>
                <Card>
                    <Row>
                        <Col>
                            <span><img src={editprofile} alt="Events" className="search"/></span>
                        </Col>
                        <Col style={{paddingTop:"0.5em"}}className="testo">Edit Profile

                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col>
                            <span><img src={logout} alt="Events" className="search"/></span>
                        </Col>
                        <Col style={{paddingTop:"0.5em"}} className="testo">
                            Logout
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Card>

            </Container>


            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileunselected} settings={settingsselected}/>

        </Container>
    )

}