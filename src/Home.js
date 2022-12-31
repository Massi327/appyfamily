import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import img_1 from "./img_1.png";

export default function Home(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid styile={{height:"79vh"}}>
            <header>
                    <Row>
                        <Col style={{textAlign: "left"}}><Button variant={"light"}><Image src={img_1} alt={"Immagine del logo"} fluid style={{blockSize: "100px", marginBottom: "15px"}}/></Button></Col>
                        <Col xs={12} sm={12} md={1}>
                            <Button variant={"dark"} style={{marginBottom:"1em"}}><Link to={"/notifications"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>noti</span></Link></Button>
                        </Col>
                        <Col xs={1} sm={1} md={1}>
                            <Button variant={"dark"} style={{marginBottom:"1em"}}><Link to={"/messages"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>mess</span></Link></Button>
                        </Col>
                        <Col xs={1} sm={1} md={1}>
                            <Button variant={"dark"} style={{marginBottom:"1em"}}><Link to={"/tutorial"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>tuto</span></Link></Button>
                        </Col>
                    </Row>
            </header>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>EVENTS</span></Link>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/people"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PEOPLE</span></Link>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
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
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>RECOMMENDED</span></Link>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/nearme"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>NEAR ME</span></Link>
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