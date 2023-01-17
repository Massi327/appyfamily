import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";
import homeunselected from "./images/home-unselected.svg";
import calendar from "./images/Calendar.svg";
import profileunselected from './images/Profile-unselected.svg'
import settingsselected from './images/Settings-selected.svg'
import NavigbarP from "./components/navbar-profile";

export default function Settings(){

    const [state,dispatch] = useContext(StateContext)

    return(

        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP/>


            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileunselected} settings={settingsselected}/>

        </Container>
    )

}