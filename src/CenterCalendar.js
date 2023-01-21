import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import "./CenterCalendar.css"
import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    Row,
    Card,
    Modal,
    CardGroup,
    FormGroup,
    FormLabel,
    FormControl
} from "react-bootstrap";
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
import profile from "./images/Profile-unselected.svg";
import ribbon from './images/ribbon_icon.png'
import NavbarProfile from "./components/navbar-profile";
import eventsp from "./images/Profile_events.svg";
import blogsp from './images/Profile_blogs.svg'
import profileselected from './images/Profile-selected.svg'
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import settings from "./images/Settings.svg";
import homeunselected from "./images/home-unselected.svg"
import {addForum, selected} from "./Action";
import imgcard4 from "./images/Image-event-4.svg";
import popupsport from "./images/image 1.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline.svg";
import whosgoing from "./images/material-symbols_emoji-people-rounded.svg";
import dropdown from "./images/gridicons_dropdown.svg";
import ProfileO from "./components/profile-options";
import CardHeader from "react-bootstrap/CardHeader";
import centerevents from "./images/Profile_events.svg"
import centerblogs from "./images/Profile_blogs.svg"
import centercalendarselected from "./images/Profile_calendar_selected.svg"
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import centerprofileimage from "./images/cus_torino.svg"
import {useLocalStorage} from "./useLocalStorage";
import centerforums from "./images/Profile_Forums_unselected.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import backarrow from "./images/backarrow.svg";


export default function CenterCalendar(){

    const [state,dispatch] = useContext(StateContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_second, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const [show_third, setShowThird] = useState(false);
    const handleCloseThird = () => setShowThird(false);
    const handleShowThird = () => setShowThird(true);

    const [show_fourth, setShowFourth] = useState(false);
    const handleCloseFourth = () => setShowFourth(false);
    const handleShowFourth = () => setShowFourth(true);

    const [controlloCorsi, setControlloCorsi] = useLocalStorage('corsi', "false")
    const [controlloCorsiCancella, setControlloCorsiCancella] = useLocalStorage('corsiCancella', "false")
    const [controlloPale, setControlloPale] = useLocalStorage('pale', "false")



    return(
        <Container style={{backgroundColor:"#f5f5f5", paddingBottom:"10em", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop:"6.5em"}}>
                <Row>
                    <Col xs={1}>
                        <Link to={"/hashtags"}><img src={backarrow} style={{left:"2em"}}/></Link>
                    </Col>
                    <Col></Col>
                </Row>


                <Card className="post" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={centerprofileimage} style={{height: '8em', width: '8rem'}} />
                        <Card.Body>
                            <Card.Title className="name" style={{textAlign: 'left'}}>CUS Torino</Card.Title>
                            <Card.Text className="connections" style={{textAlign: 'left'}}>
                                Centro Universitario Sportivo
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
            <Card>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/centerevents"}><span><img src={centerevents} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centerblogs"}><span><img src={centerforums} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centercalendar"}><span style={{borderBottomWidth:"2px", borderBottomColor:"black"}}><img src={centercalendarselected} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

                <CardGroup>
                    <Row>
                        {controlloCorsiCancella == "true" ?
                            <Col>
                                <p style={{marginTop:"0.5em", marginBottom:"-0.3em"}}>You signed up for the following courses</p>
                                <Card style={{backgroundColor:"orange", margin:"0.5em"}}>
                                    <CardHeader style={{height:"3em"}}><Card.Title className="course-title">Dance Lesson</Card.Title></CardHeader>
                                    <p style={{paddingTop:"0.3em", marginBottom:"-0.1em"}}>Monday 7PM - 8PM</p>
                                    <p style={{paddingTop:"0.3em", marginBottom:"-0.1em"}}>Added to Calendar</p>
                                    <Button style={{margin:"0.5em", marginLeft:"11em"}} onClick={()=> handleShowSecond()}>Delete from Calendar</Button>
                                </Card>
                        </Col>
                            : <Col>
                                <p style={{marginTop:"0.5em", marginBottom:"-0.3em"}}>You signed up for the following courses</p>
                                <Card style={{backgroundColor:"orange", margin:"0.5em"}}>
                                    <CardHeader style={{height:"3em"}}><Card.Title className="course-title">Dance Lesson</Card.Title></CardHeader>
                                    <p style={{paddingTop:"0.3em", marginBottom:"-0.1em"}}>Monday 7PM - 8PM</p>
                                    <Button style={{margin:"0.5em", marginLeft:"13em"}} onClick={() => {handleShow(); setControlloPale('true')}}>Copy to Calendar</Button>
                                </Card>
                            </Col>
                        }
                    </Row>

                </CardGroup>

            </Card>

            <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Body className="modal-subtitle-1">
                        <p>The class has been added to your Calendar</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                        onClick={()=> {setControlloCorsi('false'); setControlloCorsiCancella('true'); handleClose()}}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Body className="modal-subtitle-1">
                        <p>Do you wish to delete this class from your Calendar?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> {setControlloCorsi('true'); setControlloCorsiCancella('false'); setControlloPale('false'); handleCloseSecond(); handleShowThird()}}>
                            Delete
                        </Button>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> handleCloseSecond()}>
                            Don't Delete
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Modal show={show_third} onHide={handleCloseThird} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Body className="modal-subtitle-1">
                        <p>The class has been deleted from the Calendar</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> {handleCloseThird()}}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profile} settings={settings}/>

        </Container>
    )

}