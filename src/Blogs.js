import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";

export default function Blogs(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid styile={{height:"79vh"}}>

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

            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>EVENTS</span></Link>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/people"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PEOPLE</span></Link>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/blogs"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>BLOGS</span></Link>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/hashtags"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>HASHTAGS</span></Link>
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
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
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/settings"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SETTINGS</span></Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )

}