import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link, useNavigate} from "react-router-dom";
import {Button, Col, Container, Nav, Navbar, Row, Card, Modal, CardGroup, Dropdown} from "react-bootstrap";
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
import {cancelBooking, nonPartecipo, partecipo, selected} from "./Action";
import imgcard4 from "./images/Image-event-4.svg";
import moment from "moment";
import popupsport from "./images/image 1.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline.svg";

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
import profileMia from "./images/miajohnson.svg"
import calendarunselected from "./images/Calendar.svg";
import profileunselected from "./images/Profile-unselected.svg";
import settingsunselected from "./images/Settings.svg";
import backarrow from "./images/backarrow.svg";

import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import profile3 from "./images/profile3.svg";
import imgcard2 from "./images/Image-event-2.svg";
import imgcard5 from "./images/Image-event-5.svg";
import other from "./images/other.svg";
import music from "./images/music.svg";
import party from "./images/party.svg";
import sport from "./images/sport.svg";
import {useLocalStorage} from "./useLocalStorage";
import going from "./images/going.svg"
import whosgoing from "./images/whosgoing-white.svg";
import sullivan from "./images/sullivan.svg"
import profile2 from "./images/profile2.svg";


export default function SullivanEvents() {

    const [state, dispatch] = useContext(StateContext)

    const cardsull = [
        {   key: 500,
            titolo:'Open air rehabilitation',
            dataStart:moment('2022-05-02, 10:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2022-05-02, 11:00','YYYY-MM-DD, hh:mm'),
            address:'112 Apple Street, NR3 1TX, UK',
            host:'Hosted by Sullivan Jayden',
            about:'Fresh air and activities are very important for this type of rehabilitation' ,
            categoria: 'Other',
            img: 'imgcard1',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 501,
            titolo:'Sound of silence',
            dataStart:moment('2022-02-27, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2022-02-27, 18:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            host:'Hosted by Sullivan Jayden',
            about:'A music activity for deaf children',
            categoria: 'Music',
            img: 'imgcard2',
            partecipo: 'false',
            property: 'Esterno'
        },

    ]

    const img = [{key:'imgcard1', img: imgcard1}, {key:'imgcard2', img: imgcard2}, {key:'imgcard5', img: imgcard5}, {key:'imgcard4', img: imgcard4}]
    const imgBig = [{key:'Other', img: other}, {key:'Music', img: music}, {key:'Party', img: party}, {key:'Sport', img: sport}]

    const [cardsully, setCardSully] = useLocalStorage('cardsully', cardsull)

    const navigate = useNavigate();

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

    const [show_fifth, setShowFifth] = useState(false);
    const handleCloseFifth = () => setShowFifth(false);
    const handleShowFifth = () => setShowFifth(true);

    return (
        <Container style={{backgroundColor: "#f5f5f5", zIndex: '-1000', minHeight: '100vh', top: '5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop: "6.5em"}}>
                <Row>
                    <Col xs={1}>
                        <img src={backarrow} style={{left:"3em", height:'2em', width:'2em'}} onClick={()=> navigate(-1)}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


            <Container className="bg2" style={{paddingTop: "0.5em"}}>


                <Card className="post1" style={{
                    width: '100%',
                    height: '8rem',
                    marginTop: '0em',
                    marginBottom: '1em',
                    borderRadius: '10px',
                    borderWidth: '0',
                    flexDirection: 'row'
                }}>
                    <Card.Img src={sullivan} style={{height: '8em', width: '8rem'}}/>
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Doctor_Sally</Card.Title>
                        <Card.Text style={{textAlign: 'left'}}>Sullivan Jayden</Card.Text>
                        <Card.Text className="connections" style={{textAlign: 'left', marginTop: "-1em"}}>
                            Silver, 256 connections
                        </Card.Text>
                        <Row>
                            <Col xs={4}>
                                <Button style={{
                                    fontSize: "15px",
                                    marginTop: "-1em",
                                    borderColor: "#eb506c",
                                    color: "white",
                                    backgroundColor: "#eb506c",
                                    borderWidth: "2px",
                                    borderRadius: "10px",
                                    marginRight: "0.5em"
                                }}>
                                    Follow
                                </Button>
                            </Col>
                            <Col xs={4}>
                                <Button style={{
                                    fontSize: "15px",
                                    marginTop: "-1em",
                                    borderColor: "#eb506c",
                                    color: "white",
                                    backgroundColor: "#eb506c",
                                    borderWidth: "2px",
                                    borderRadius: "10px",
                                    marginRight: "0em"
                                }}>
                                    Message
                                </Button>
                            </Col>
                            <Col>

                            </Col>


                        </Row>

                    </Card.Body>
                </Card>


            </Container>

            <Card style={{paddingBottom: "10em"}}>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/sullivanevents"}><span><img src={centereventsselected} alt="Events"
                                                                    className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/sullivanforum"}><span><img src={centerforums} alt="Events"
                                                                          className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

                <Container style={{paddingTop:'0.1em', paddingBottom:'4em'}}>
                    {  cardsully.map( p =>
                        <Card className="post" key={p.key} style={{ minHeight: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}
                              onClick={()=> {handleShow(); dispatch(selected(p.key))}}>
                            <Card.Img className="cardimg" src={img.filter(f => f.key == p.img).map(c => c.img)} style={{minHeight: '5em', maxWidth: "9em", marginLeft:"0.5em", width: '10rem', verticalAlign:'center'}} />
                            <Card.Body>
                                <Card.Text className="event-time-1">
                                    <Row>
                                        <Col>
                                            <h6 style={{textAlign:"left"}}>{moment(p.dataStart).locale('en').format('MMM D').toUpperCase()} • {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()}</h6>
                                        </Col>
                                        <Col xs={2}>

                                        </Col>
                                    </Row>
                                </Card.Text>
                                <Card.Title className="event-title-1" style={{textAlign: 'left'}}>{p.titolo}</Card.Title>
                                <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                                    {p.host}
                                </Card.Text>
                                <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                    <img src={clock} alt="Near me" className="icon"/> {moment(p.dataStart).locale('en').format('D MMM YYYY')}, {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()} - {moment(p.dataEnd).locale('en').format('h:mm a').toUpperCase()}
                                </Card.Text>
                                <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                                    <img src={map} alt="Near me" className="icon"/> {p.address}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Container>

            </Card>

            <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                            <Card.Body>
                                <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                    {cardsully.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                </Card.Text>
                                <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                    {cardsully.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Col>
                            <Row>
                                <Modal.Title className="modal-title-1" style={{fontSize:"25px", marginLeft:"1em"}}>{cardsully.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                            </Row>
                            <Row className="event-subtitle-1" style={{textAlign: 'left', marginLeft:"0.1em", fontSize:"15px"}}>
                                <p style={{textAlign: 'left'}}>{cardsully.filter(p => p.key===state.id).map(m=>m.host)}</p>
                            </Row>
                        </Col>
                    </Modal.Header>

                    <Modal.Body className="modal-subtitle-1">

                        <img src={imgBig.filter(f => f.key == cardsully.filter(g=> g.key == state.id).map(m=> m.categoria)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>

                        <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {cardsully.filter(p => p.key===state.id).map(m=>m.address)}</p>
                        <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {cardsully.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {cardsully.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {cardsully.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                        <p className="about">About</p>
                        <p>{cardsully.filter(p => p.key===state.id).map(m=>m.about)}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        This is an old event
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected}
                            settings={settingsunselected}/>


        </Container>
    )

}