import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
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


export default function MiaJohnson(){

    const [state,dispatch] = useContext(StateContext)

    const [prenotazione, setPrenotazione] = useState(() => {
        const prenotazione = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazione} )

    const cardmia = [
        {   key: 300,
            titolo:'Park Date',
            dataStart:moment('2023-02-01, 18:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-01, 19:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Hosted by Mia Johnson',
            categoria: 'Esterno',
            partecipo: 'false',
            img: 'imgcard1'
        },
        {   key: 301,
            titolo:'Joe\'s Party',
            dataStart:moment('2023-01-13, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-13, 20:00','YYYY-MM-DD, hh:mm'),
            address:'113 Flams Close, CB4 2TY, UK',
            about:'Hosted by Mia Johnson',
            categoria: 'Esterno',
            partecipo: 'false',
            img: 'imgcard5'
        },
        {   key: 302,
            titolo:'Music games',
            dataStart:moment('2023-01-02, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-02, 18:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Hosted by Mia Johnson',
            categoria: 'Esterno',
            partecipo: 'false',
            img: 'imgcard2'
        },
        {   key: 303,
            titolo:'Football Party',
            dataStart:moment('2022-12-04, 20:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2022-12-04, 21:00','YYYY-MM-DD, hh:mm'),
            address:'13 Congo Street, PT3 1MX, UK',
            about:'Hosted by Mia Johnson',
            categoria: 'Esterno',
            partecipo: 'false',
            img: 'imgcard4'
        },
    ]

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

    const [show_fifth, setShowFifth] = useState(false);
    const handleCloseFifth = () => setShowFifth(false);
    const handleShowFifth = () => setShowFifth(true);
    const [cardhome, setCardhome] = useLocalStorage('cardhome', cardmia)



    const img = [{key:'imgcard1', img: imgcard1}, {key:'imgcard2', img: imgcard2}, {key:'imgcard5', img: imgcard5}, {key:'imgcard4', img: imgcard4}]
    const imgBig = [{key:'Other', img: other}, {key:'Music', img: music}, {key:'Party', img: party}, {key:'Sport', img: sport}]


    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', top:'5em'}}>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <Container className="bg2" style={{paddingTop:"6.5em"}}>
                <Row>
                    <Col xs={1}>
                        <Link to={"/people"}><img src={backarrow} style={{left:"2em"}}/></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>



            <Container className="bg2" style={{paddingTop:"0.5em"}}>


                <Card className="post1" style={{ width: '100%', height: '8rem',  marginTop: '0em', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={profileMia} style={{height: '8em', width: '8rem'}} />
                    {/*<Card.Img  src={ribbon} className="ribbon" />*/}
                    <Card.Body>
                        <Card.Title className="name" style={{textAlign: 'left'}}>Jane_Austen</Card.Title>
                        <Card.Text style={{textAlign: 'left'}}>Mia Johnson</Card.Text>
                        <Card.Text className="connections" style={{textAlign: 'left', marginTop:"-1em"}}>
                            126 connections
                        </Card.Text>
                        <Row>
                            <Col xs={4}>
                                <Button style={{fontSize:"15px", marginTop: "-1em", borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0.5em"}}>
                                    Follow
                                </Button>
                            </Col>
                            <Col xs={4}>
                                <Button style={{fontSize:"15px", marginTop: "-1em", borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0em"}}>
                                    Message
                                </Button>
                            </Col>
                            <Col>

                            </Col>


                        </Row>

                    </Card.Body>
                </Card>


            </Container>
            <Card style={{paddingBottom:"10em"}}>
                <CardHeader>
                    <Container className="search">
                        <Row className='row'>
                            <Col>
                                <Link to={"/miajohnson"}><span><img src={centereventsselected} alt="Events" className="search"/></span></Link>
                            </Col>

                            <Col>
                                <Link to={"/miajohnsonforums"}><span><img src={centerforums} alt="Events" className="search"/></span></Link>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>

                {cardmia.map( p =>
                    <Card className="post" key={p.key} style={{ minHeight: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}} onClick={()=> {handleShow(); dispatch(selected(p.key))}}>
                        <Card.Img className="cardimg" src={img.filter(f => f.key == p.img).map(c => c.img)} style={{minHeight: '5em', maxWidth: "9em", marginLeft:"0.5em", width: '10rem', verticalAlign:'center'}} />
                        <Card.Body>
                            <Card.Text className="event-time-1">
                                <Row>
                                    <Col>
                                        <h6 style={{textAlign:"left"}}>{moment(p.dataStart).locale('en').format('MMM D').toUpperCase()} • {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()}</h6>
                                    </Col>
                                    <Col xs={2}>
                                        <img src={threedots} style={{textAlign:"right"}}/>
                                    </Col>
                                </Row>
                            </Card.Text>
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
                        <Modal.Header closeButton>
                            <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                <Card.Body>
                                    <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                        {cardmia.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                    </Card.Text>
                                    <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                        {cardmia.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Col>
                                <Row>
                                    <Modal.Title className="modal-title-1" style={{fontSize:"25px", marginLeft:"1em"}}>{cardmia.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                                </Row>
                                <Row className="event-subtitle-1" style={{textAlign: 'left', marginLeft:"0.1em", fontSize:"15px"}}>
                                    <p style={{textAlign: 'left'}}>{cardmia.filter(p => p.key===state.id).map(m=>m.host)}</p>
                                </Row>
                            </Col>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">

                            <img src={imgBig.filter(f => f.key == cardmia.filter(g=> g.key == state.id).map(m=> m.categoria)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>
                            <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {cardmia.filter(p => p.key===state.id).map(m=>m.address)}</p>
                            <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {cardmia.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {cardmia.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {cardmia.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                            <p className="about">About</p>
                            <p>{cardmia.filter(p => p.key===state.id).map(m=>m.about)}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            {cardmia.filter(f=> f.key == state.id).map(m=> m.partecipo) == 'false'?
                                <Button style={{fontSize:"15px", borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0em"}}
                                        onClick={()=>{handleClose(); handleShowSecond()}}><img src={going}/> Participate</Button> :
                                <Button style={{fontSize:"15px", borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                        onClick={()=>{handleClose(); handleShowFourth()}}><img src={participate}/> Don't participate</Button> }

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic"  style={{borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0em"}}>
                                    <img src={whosgoing}/>  Who's Going
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/miajohnson">                    <img  src={profile1} style={{height: '2em', width: '2rem', marginRight:"0.5em"}} />
                                        Mia Johnson</Dropdown.Item>
                                    <Dropdown.Item href="/claramay">
                                        <img  src={profile4} style={{height: '2em', width: '2rem', marginRight:"0.5em"}} />Clara May</Dropdown.Item>
                                    <Dropdown.Item href="/sullivanjayden">
                                        <img  src={profile3} style={{height: '2em', width: '2rem', marginRight:"0.5em"}} />
                                        Sullivan Jayden</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Body className="modal-subtitle-1">
                            <p>Do you wish to participate?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {cardmia.filter(f=> f.key == state.id).map(q=> q.partecipo='true');
                                        cardmia.filter(f=> f.key == state.id).map(m=>{
                                            dispatch(partecipo(m.key, m.dataStart, m.dataEnd, m.address, m.titolo, m.about, m.categoria, m.property, m.host, m.img))
                                        });
                                        handleCloseSecond(); handleShowThird()}}>
                                Yes
                            </Button>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> handleCloseSecond()}>
                                No
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <Modal show={show_third} onHide={handleCloseThird} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Body className="modal-subtitle-1">
                            <p>The event has been added to your Calendar</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {localStorage.setItem('partecipazioni', JSON.stringify(state.partecipazioni));
                                        localStorage.setItem('cardhome', JSON.stringify(cardhome)); handleCloseThird()}}>
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <Modal show={show_fourth} onHide={handleCloseFourth} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Body className="modal-subtitle-1">
                            <p>Are you sure that you don't want to participate anymore?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {cardmia.filter(f=> f.key == state.id).map(q => q.partecipo='false');
                                        dispatch(nonPartecipo(state.id));handleCloseFourth(); handleShowFifth()}}>
                                Don't participate
                            </Button>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> handleCloseFourth()}>
                                Participate
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <Modal show={show_fifth} onHide={handleCloseFifth} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Body className="modal-subtitle-1">
                            <p>The event has been removed from your Calendar</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {localStorage.setItem('partecipazioni', JSON.stringify(state.partecipazioni));
                                        localStorage.setItem('cardhome', JSON.stringify(cardhome)); handleCloseFifth()}}>
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

            </Card>


            <NavigbarBottom home={homeunselected} calendar={calendarunselected} profile={profileunselected} settings={settingsunselected}/>


        </Container>
    )

}