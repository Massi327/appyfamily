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



const Navigbar = ({ vevents, vblogs, vpeople, vhashtags, vrec, vnearme }) => {



return  <Container className="cont">
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
            <Button className="search-button" variant="outline-success">Search</Button>
        </Form>

        <Container className="search-icons">
            <Row className="justify-content-sm-center">
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/home"}><span><img src={vevents} alt="Events" className="search-icon"/></span></Link>

                </Col>
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/people"} style={{color: "white", textDecoration: "none"}}><span><img src={vpeople} alt="People" className="search-icon"/></span></Link>

                </Col>
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/blogs"} style={{color: "white", textDecoration: "none"}}><span><img src={vblogs} alt="Blogs" className="search-icon"/></span></Link>

                </Col>
                <Col xs={3} sm={12} md={3}>

                    <Link to={"/hashtags"} style={{color: "white", textDecoration: "none"}}><span><img src={vhashtags} alt="Hashtags" className="search-icon"/></span></Link>

                </Col>
            </Row>
        </Container>

        <Container className="cont-menu-rec-nearme" >
            <Row className="menu-rec-nearme">

                <Col>
                    <Link to={"/home"} ><img src={vrec} alt="Recommended" className="icon" style={{marginTop:"5px"}}/></Link>
                </Col>
                <Col>
                    <Link to={"/nearme"}><img src={vnearme} alt="Near me" className="icon" style={{marginTop:"10px"}}/></Link>
                </Col>


            </Row>
        </Container>
    </Container>

</Container>
}

export default Navigbar