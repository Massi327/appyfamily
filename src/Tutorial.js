import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import helpselected from "./images/tutorialselected.svg";
import NavigbarP from "./components/navbar-profile";
import homeunselected from "./images/home-unselected.svg";
import calendarunselected from "./images/Calendar.svg";
import profileunselected from "./images/Profile-unselected.svg";
import settingsunselected from "./images/Settings.svg";
import NavigbarBottom from "./components/navbar-bottom";

export default function Tutorial(){

    const [state,dispatch] = useContext(StateContext)

    return(

        <Container fluid styile={{height:"79vh"}}>
            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={helpselected}/>
            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected} settings={settingsunselected}/>
        </Container>
    )

}