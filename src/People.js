import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import clock from "./images/Clock.svg";
import people1 from "./images/People_1.svg"
import people2 from "./images/People_2.svg"
import people3 from "./images/People_3.svg"
import people4 from "./images/People_4.svg"
import people5 from "./images/People_5.svg"
import people from "./images/People_frame.svg"

export default function People(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container style={{backgroundColor:"#f5f5f5"}}>

            <Navigbar value="/blogs"/>
            <NavigbarBottom value="Home"/>
            <Container style={{marginTop:'15em'}}>
                <img src={people} alt="Person" className="icon"/>
            </Container>

        </Container>
    )

}