import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link, useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Form, Modal, Nav, Navbar, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import events from "./images/Events.svg";
import forum from "./images/Forum-unselected.svg";
import people from "./images/People.svg";
import profile4 from "./images/profile4.svg";
import hashtag from "./images/hashtag.svg"
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";
import centersselected from "./images/centers-selected.svg";
import forums from "./images/Forums.svg"
import profile2 from "./images/profile2.svg";
import cusimage from "./images/CUS.svg"

import artattic from "./images/artattic.svg"
import musetheatre from "./images/musetheatre.svg"
import bounce from "./images/bounce.svg"
import backarrow from "./images/backarrow.svg";
import forwardarrow from "./images/forwardarrow.svg";

export default function Hashtags(){

    const [state,dispatch] = useContext(StateContext)

    const [tutorial, setTutorial] = useState(()=> {
        const tutorial = JSON.parse(localStorage.getItem('tutorial'))
        return tutorial
    })

    const [show_sith, setShowSith] = useState(true);
    const handleCloseSith = () => setShowSith(false);
    const handleShowSith = () => setShowSith(true);

    const navigate = useNavigate();

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh'}}>
            <Navigbar vevents={events}
                      vforum={forums}
                      vpeople={people}
                      vcenters={centersselected}
                      value={"none"}
            />


            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>

            <Container style={{paddingTop:'16em'}}>


                <Link to={"/centerevents"} style={{textDecoration:"none"}}>
                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={cusimage} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>CUS Torino</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Centro Universitario Sportivo
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>

                <Link to={"/museevents"} style={{textDecoration:"none"}}>
                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={musetheatre} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>The Muse Theatre</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Music School
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>


            </Container>

            {tutorial == true ?
                <Modal show={show_sith} onHide={handleCloseSith} backdrop={"static"} centered>
                    <Modal.Dialog>
                        <Modal.Header closeButton onClick={()=> {navigate('/home', {replace: true}); localStorage.setItem('tutorial', 'false');}}/>
                        <Modal.Body className="modal-subtitle-1">
                            <Row>
                                <p style={{textAlign:'center', fontSize:'1.5em'}}>This is the <span style={{fontWeight: 'bold', color:'#FF8C2E'}}>Centers</span>!</p>
                                <div style={{textAlign:'center', fontSize:'1.5em'}}>This section enables you to find various kinds of centers</div>
                                <div style={{textAlign:'center', fontSize:'1.5em'}}>(i.e. sports centers, child care centers, music centers).</div>
                                <div style={{textAlign:'center', fontSize:'1.5em'}}>Through this page you can access the activities of centers you are already registered to.</div>
                            </Row>
                            <br/>
                            <Row>
                                <Col xs={6} style={{textAlign:'left'}}>
                                    <img src={backarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => navigate('/tutorial', {replace: true})}/>
                                </Col>
                                <Col xs={6} style={{textAlign:'right'}}>
                                    <img src={forwardarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => navigate('/calendar', {replace: true})}/>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal>
                : null}


        </Container>
    )

}