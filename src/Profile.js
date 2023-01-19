import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card, Modal, CardGroup} from "react-bootstrap";
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
import profileSofia from './images/sophia+ribbon.png'
import NavbarProfile from "./components/navbar-profile";
import eventsp from "./images/Profile_events.svg";
import blogsp from './images/Profile_blogs.svg'
import profileselected from './images/Profile-selected.svg'
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import settings from "./images/Settings.svg";
import homeunselected from "./images/home-unselected.svg"
import {cancelBooking, selected} from "./Action";
import imgcard4 from "./images/Image-event-4.svg";
import moment from "moment";
import popupsport from "./images/image 1.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline.svg";
import whosgoing from "./images/material-symbols_emoji-people-rounded.svg";
import dropdown from "./images/gridicons_dropdown.svg";
import ProfileO from "./components/profile-options";
import centerprofileimage from "./images/cus_torino.svg";
import CardHeader from "react-bootstrap/CardHeader";
import centereventsselected from "./images/Profile_events_selected.svg";
import centerblogs from "./images/Profile_blogs.svg";
import centercalendar from "./images/Profile_calendar.svg";
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import addicon from "./images/Add-icon.svg";
import centerforums from "./images/Profile_Forums_unselected.svg";
import centerforumsselected from "./images/Profile_Forums.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";

export default function Profile(){

    const [state,dispatch] = useContext(StateContext)

    const [prenotazione, setPrenotazione] = useState(() => {
        const prenotazione = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazione} )

    let events = [];
    prenotazione.map(p => {
        let event={
            key: p.key,
            titolo: p.titolo,
            dataStart: moment(p.dataStart,'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
            dataEnd: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
            address: p.address,
            about: p.about,
            categoria: p.categoria,
            property: p.property
        }
        events.push(event)
    })

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

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Row className="justify-content-sm-right" style={{zIndex:"1000"}}>
                <Col xs={10} md={1}>
                    <span><img src={addicon} onClick={()=>handleShowFourth()} alt="Add" className="search-icon"/></span>
                </Col>
            </Row>

            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>

            <Container className="bg2" style={{paddingTop:"7em"}}>


                <Card className="post1" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profileSofia} style={{height: '8em', width: '8rem'}} />
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Sophia_Wilkinson</Card.Title>
                        <Card.Text className="connections" style={{textAlign: 'left'}}>
                            Silver, 356 connections
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <Card>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/profile"}><span><img src={centereventsselected} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/profileforums"}><span><img src={centerforums} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

                {events.slice(0).reverse().filter(f=> f.property == 'public').map( p =>
                        <Card className="post" key={p.key} style={{height: '8rem', marginBottom: '1em', borderRadius: '10px', borderWidth: '0', flexDirection: 'row'}}
                              onClick={() => {handleShow();dispatch(selected(p.key))}}>
                            <Card.Img className="cardimg" src={imgcard4}
                                      style={{height: '8em', width: '10rem', verticalAlign: 'center'}}/>
                            <Card.Body>
                                <Card.Text className="event-time-1"
                                           style={{textAlign: 'left'}}>{moment(p.dataStart).locale('en').format('MMM D').toUpperCase()} • {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()}</Card.Text>
                                <Card.Title className="event-title-1"
                                            style={{textAlign: 'left'}}>{p.titolo}</Card.Title>
                                <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                                    {p.about}
                                </Card.Text>
                                <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                    <img src={clock} alt="Near me"
                                         className="icon"/> {moment(p.dataStart).locale('en').format('D MMM YYYY')}, {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()} - {moment(p.dataEnd).locale('en').format('h:mm a').toUpperCase()}
                                </Card.Text>
                                <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                    <img src={map} alt="Near me" className="icon"/> {p.address}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}

            </Card>

            <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Header closeButton>
                        <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                            <Card.Body>
                                <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                    {prenotazione.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                </Card.Text>
                                <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                    {prenotazione.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Modal.Title className="modal-title-1">{prenotazione.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="modal-subtitle-1">

                        <img src={popupsport} style={{marginBottom:"0.5em", width:"22em"}}/>

                        <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {prenotazione.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {prenotazione.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {prenotazione.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                        <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {prenotazione.filter(p => p.key===state.id).map(m=>m.address)} </p>
                        <p className="about">About</p>
                        <p>{prenotazione.filter(p => p.key===state.id).map(m=>m.about)}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{fontSize:"13px",borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                onClick={()=>dispatch(cancelBooking(state.id))}>
                            <Link to={"/editaddevent"}>Edit</Link>
                        </Button>
                        <Button style={{fontSize:"13px", borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                onClick={()=>{dispatch(cancelBooking(state.id)); handleClose(); handleShowSecond()}}
                        >Delete</Button>

                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Body className="modal-subtitle-1">
                        <p>Do you wish to delete?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> {localStorage.setItem('prenotazioni', JSON.stringify(state.prenotazioni)); handleCloseSecond(); handleShowThird()}}>
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
                        <p>The event has been deleted successfully</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> {setPrenotazione(state.prenotazioni); handleCloseThird();}}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Modal show={show_fourth} onHide={handleCloseFourth} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Body className="modal-subtitle-1">
                        <p>What do you wish to add?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> { handleCloseFourth();}}>
                            <Link to={"/add"} style={{color:"#eb506c", textDecoration: "none"}}>
                                Event
                            </Link>
                        </Button>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={()=> { handleCloseFourth();}}>
                            <Link to={"/addforum"} style={{color:"#eb506c", textDecoration: "none"}}>
                                Forum
                            </Link>
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>


            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>

        </Container>
    )

}