import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";

export default function Profile(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid styile={{height:"79vh"}}>
            <NavigbarBottom value="Home"/>
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

            <Row>
                <Card border='none' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Profile name</Card.Title>
                        <Card.Text>
                            Rank, Number of connections
                        </Card.Text>
                        <Button variant="primary">Connect</Button>
                        <Button variant="primary">Message</Button>
                    </Card.Body>
                </Card>
            </Row>

            {/*TODO: card eventi*/}

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
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
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