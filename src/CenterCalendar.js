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
import moment from "moment";
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


export default function CenterCalendar(){

    const [state,dispatch] = useContext(StateContext)

    const [prenotazione, setPrenotazione] = useState(() => {
        const prenotazione = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazione} )

    let events = [];
    prenotazione.map(p => {
        let event={
            key: p.key,
            titolo: p.titolo,
            dataStart: moment(p.dataStart,'YYYY-MM-DD, hh:mm').toDate(),
            dataEnd: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').toDate(),
            address: p.address,
            about: p.about,
            categoria: p.categoria
        }
        events.push(event)
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_second, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP/>
            <Container className="bg2" style={{paddingTop:"7em"}}>

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
                                <Link to={"/centerblogs"}><span><img src={centerblogs} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/centercalendar"}><span style={{borderBottomWidth:"2px", borderBottomColor:"black"}}><img src={centercalendarselected} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>


                {/*<CardGroup>

                    <p style={{paddingTop:"5em"}}>To visualise the schedule, you have to login first</p>
                    <Button onClick={() => handleShow()} style={{backgroundColor:"#eb506c", color:"white", borderWidth:"2px", borderColor:"#eb506c", borderRadius:"10px", marginBottom:"5em"}}>Log in</Button>

                </CardGroup>*/}

                <CardGroup>
                    {/*<Row>
                    {/*{show_second =="true" ? <Col>*/}
                    <p style={{marginTop:"0.5em", marginBottom:"-0.3em"}}>You signed up for the following courses</p>

                    <Card style={{backgroundColor:"orange", margin:"0.5em"}}>
                        <CardHeader style={{height:"3em"}}><Card.Title className="course-title">Dance Lesson</Card.Title></CardHeader>
                        <p style={{paddingTop:"0.3em", marginBottom:"-0.1em"}}>Monday 7PM - 8PM</p>
                        <Button style={{margin:"0.5em", marginLeft:"13em"}}>Copy to Calendar</Button>
                    </Card>

                    <Card style={{backgroundColor:"mediumaquamarine", margin:"0.5em"}}>
                        <CardHeader style={{height:"3em"}}><Card.Title className="course-title">Fencing Lesson</Card.Title></CardHeader>
                        <p style={{paddingTop:"0.3em", marginBottom:"-0.1em"}}>Tuesday 8PM - 9PM</p>
                        <Button style={{margin:"0.5em", marginLeft:"13em"}}>Copy to Calendar</Button>
                    </Card>

                    {/*</Col> : null}*/}
                    {/*</Row>*/}

                    {/*} <Card style={{backgroundColor:"orange", margin:"0.5em"}}>
                        <p style={{paddingTop:"0.5em"}}>7pm Dance Lesson</p>
                    </Card>

                    <Card style={{backgroundColor:"mediumaquamarine", margin:"0.5em"}}>
                        <p style={{paddingTop:"0.5em"}}>9pm Athletics Lesson</p>
                    </Card>*/}


                </CardGroup>

            </Card>
            <NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>

            <Container style={{marginTop:"15em"}}>
                <Button onClick={()=> console.log(state.prenotazioni)}>+</Button>
                {events.slice(0).reverse().map( p =>

                    <Card className="post" key={p.key} style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}} onClick={()=> {handleShow(); dispatch(selected(p.key))}}>
                        <Card.Img className="cardimg" src={imgcard4} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
                        <Card.Body>
                            <Card.Text className="event-time-1" style={{textAlign: 'left'}}>{moment(p.dataStart).locale('en').format('MMM D').toUpperCase()} • {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()}</Card.Text>
                            <Card.Title className="event-title-1" style={{textAlign: 'left'}}>{p.titolo}</Card.Title>
                            <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                                {p.about}
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

                <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title className="modal-title-1">Login</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">
                            <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                <FormLabel className="subtitle">Username</FormLabel>
                                <FormControl></FormControl>
                                {/* <FormControl type='text' value={titolo} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='Title' onChange={e=> setTitolo(e.target.value)}/>*/}
                            </FormGroup>

                            <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                <FormLabel className="subtitle">Password</FormLabel>
                                {/* <FormControl type='textarea' value={about} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='About' onChange={e=> setAbout(e.target.value)}/>*/}
                                    <FormControl></FormControl>
                            </FormGroup>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={handleClose}
                            >Cancel</Button>
                            <Button style={{backgroundColor:"#eb506c", color:"white", borderWidth:"2px", borderColor:"#eb506c", borderRadius:"10px"}}
                                    onClick={handleClose}
                                /*onClick={() => handleShowSecond()}*/
                            >Log in</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

            </Container>
            {/*<NavigbarP />

                <Container className="bg2">

                    <Card className="post" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Img  src={profile} style={{height: '8em', width: '8rem'}} />
                        {/*<Card.Img  src={ribbon} className="ribbon" />
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
            </Container>*/}
            {/*TODO: card eventi*/}
            {/*  <Row className="justify-content-md-center">

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>HOME</span></Link>
                    </Button>
                </Col>

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CALENDAR</span></Link>
                    </Button>
                </Col>

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"danger"} style={{marginBottom:"1em"}}>
                        <Link to={"/profile"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PROFILE</span></Link>
                    </Button>
                </Col>

                <Col xs={12} sm={12} md={3}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/settings"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SETTINGS</span></Link>
                    </Button>
                </Col>
            </Row>*/}
            {/*<NavigbarBottom home={homeunselected} calendar={calendar} profile={profileselected} settings={settings}/>*/}

        </Container>
    )

}