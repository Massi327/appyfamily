import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Image, Nav, Navbar, Row} from "react-bootstrap";
import img_1 from "./img_1.png";
import "./Home.css";
import logo from './images/APPy family-logo.png';
import notif from './images/notifications-icon.svg';
import message from './images/messages-icon.svg';
import help from './images/help-icon.svg'

export default function Home(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container className="container">

            <Navbar className="navigbar" style={{overflow: "hidden", top: "0px", width: "100%"}}>
                <Container>
                    <span><img src={logo} className="logo"/></span>
                    <Navbar.Brand className="title"  style={{color:"white"}} href="/home"> APPy Family</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="notifications" style={{textAlign: "right"}} href="/notifications"><img src={notif} alt="Notifications" className="icon"/></Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="/messages"><img src={message} alt="Messages" className="icon"/></Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="/tutorial"><img src={help} alt="Help" className="icon"/></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form>

            <Row className="justify-content-sm-center">
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>EVE</span></Link>
                    </Button>
                </Col>
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/people"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PEO</span></Link>
                    </Button>
                </Col>
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/blogs"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>BLO</span></Link>
                    </Button>
                </Col>
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/hashtags"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>HAS</span></Link>
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-sm-center">
                <Col xs={6} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>RECOMMENDED</span></Link>
                    </Button>
                </Col>
                <Col xs={6} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/nearme"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>NEAR ME</span></Link>
                    </Button>
                </Col>
            </Row>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Row className="justify-content-sm-center">
                <Col xs={1} md={1}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/add"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>+</span></Link>
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-sm-center">
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>HOM</span></Link>
                    </Button>
                </Col>
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CAL</span></Link>
                    </Button>
                </Col>
                <Col xs={3} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/profile"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PRO</span></Link>
                    </Button>
                </Col>
                <Col xs={3
                } sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/settings"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SE</span></Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )

}