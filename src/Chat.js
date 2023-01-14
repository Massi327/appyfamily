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
export default function Chat(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container className="bg-n">

        </Container>
    )

}