import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";

export default function Messaggi(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid styile={{height:"79vh"}}>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>home</span></Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )

}