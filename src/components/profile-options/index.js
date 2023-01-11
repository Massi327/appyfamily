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
import eventsp from "../../images/Events-selezionato.svg";
import blogsp from "../../images/Blogs-selezionato.svg";
import "./index.css"


const ProfileO = ({ events,blogs}) => {



    return  <Container className="base">
        <Container className="container">

            <Container className="search">
                <Row className='row'>
                    <Col xs={3} sm={12} md={3}>

                        <Link to={"/home"}><span><img src={events} alt="Events" className="search"/></span></Link>

                        <Link to={"/blogs"} style={{color: "white", textDecoration: "none"}}><span><img src={blogs} alt="Blogs" className="search-icon"/></span></Link>

                    </Col>
                </Row>
            </Container>

        </Container>

    </Container>
}

export default ProfileO