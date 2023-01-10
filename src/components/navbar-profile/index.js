import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import logo from "../../images/APPy family-logo.png";
import notif from "../../images/notifications-icon.svg";
import message from "../../images/messages-icon.svg";
import help from "../../images/help-icon.svg";
import events from "../../images/Events.svg";
import people from "../../images/People.svg";
import blogs from "../../images/Blogs.svg";
import hashtags from "../../images/Hashtags.svg";
import recbut from "../../images/recommended-button.svg";
import nearme from "../../images/near-me.svg";
import {Link} from "react-router-dom";
import eventsselected from "../../images/Events-selezionato.svg";
import peopleselected from "../../images/People-selezionato.svg";
import blogsselectd from "../../images/Blogs-selezionato.svg";
import hashtagsselected from "../../images/Hashtags-selezionato.svg";
import NavigbarBottom from "../navbar-bottom";


const NavigbarP =  () => {

    return  <Container className="cont1">
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



            
        </Container>

    </Container>
}

export default NavigbarP