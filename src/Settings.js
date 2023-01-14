import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";
import homeunselected from "./images/home-unselected.svg";
import calendar from "./images/Calendar.svg";
import profileselected from "./images/Profile-selected.svg";
import settings from "./images/Settings.svg";
import profile from './images/Profile-unselected.svg'
import settingsselected from './images/Settings-selected.svg'

export default function Settings(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid styile={{height:"79vh"}}>
            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profile} settings={settingsselected}/>

            <Navbar style={{overflow: "hidden", top: "0px", width: "100%"}} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">APPy Family</Navbar.Brand>
                    <Nav>
                        <Nav.Link style={{textAlign: "right"}} href="/notifications">Notifications</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="/messages">Messages</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="/tutorial">Tutorial</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>HOME</span></Link>
                    </Button>
                </Col>

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CALENDAR</span></Link>
                    </Button>
                </Col>

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/profile"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PROFILE</span></Link>
                    </Button>
                </Col>

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/settings"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SETTINGS</span></Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )

}