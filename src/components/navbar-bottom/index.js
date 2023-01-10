import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import home from "../../images/Home-icon.svg";
import calendar from "../../images/Calendar.svg";
import profile from "../../images/Profile.svg";
import settings from "../../images/Settings.svg";



const NavigbarBottom = (props) => {
    const {value} = props

    return <Container className="navigbar-bottom" style={{width: "100vw", zIndex: '1000'}}>
        <Row className="justify-content-sm-center">
            <Col xs={3} sm={12} md={3}>
                <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span><img src={home} alt="Home" className="bottom-bar-icon"/></span></Link>

            </Col>
            <Col xs={3} sm={12} md={3}>
                <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span><img src={calendar} alt="Calendar" className="bottom-bar-icon"/></span></Link>
            </Col>
            <Col xs={3} sm={12} md={3}>
                <Link to={"/profile"} style={{color: "white", textDecoration: "none"}}><span><img src={profile} alt="Profile" className="bottom-bar-icon"/></span></Link>
            </Col>
            <Col xs={3} sm={12} md={3}>
                <Link to={"/settings"} style={{color: "white", textDecoration: "none"}}><span><img src={settings} alt="Settings" className="bottom-bar-icon"/></span></Link>

            </Col>
        </Row>
    </Container>

}

export default NavigbarBottom;
