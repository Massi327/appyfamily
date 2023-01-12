import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card} from "react-bootstrap";
import NavigbarBottom from "./components/navbar-bottom";
import NavigbarP from "./components/navbar-profile";
import eventsselected from "./images/Events-selezionato.svg";
import blogs from "./images/Blogs.svg";
import people from "./images/People.svg";
import hashtags from "./images/Hashtags.svg";
import "./Profile.css";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import profile from './images/sophia+ribbon.png'
import ribbon from './images/ribbon_icon.png'
import NavbarProfile from "./components/navbar-profile";
import eventsp from "./images/Events-selezionato.svg";
import blogsp from './images/Blogs.svg'
export default function Follower(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container className="bg" style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP />

            <Container className="bg2">

                <Card className="post" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profile} style={{height: '8em', width: '8rem'}} />
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Sophia_Wilkinson</Card.Title>
                        <Card.Text className="connections" style={{textAlign: 'left'}}>
                            Silver, 356 connections
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <Container style={{marginTop:"15em"}}>
                <NavbarProfile events={eventsp}
                               blogs={blogsp}/>
            </Container>


            <NavigbarBottom value="Profile"/>
        </Container>
    )

}