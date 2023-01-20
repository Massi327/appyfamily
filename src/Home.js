import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Dropdown, Form, Image, Modal, Nav, Navbar, Row} from "react-bootstrap";
import img_1 from "./img_1.png";
import "./Home.css";
import logo from './images/APPy family-logo.png';
import notif from './images/notifications-icon.svg';
import message from './images/messages-icon.svg';
import help from './images/help-icon.svg'

import people from './images/People.svg'
import forumunselected from "./images/Forum-unselected.svg";
import centers from "./images/centers-unselected.svg";
import recbut from './images/recommended-button.svg'
import nearme from './images/near-me.svg'
import ellipse from './images/Ellipse-bottom-menu.svg'
import home from './images/Home-icon.svg'
import add from './images/Add.svg'
import addicon from './images/Add-icon.svg'
import calendar from './images/Calendar.svg'
import profile from './images/Profile-unselected.svg'
import settings from './images/Settings.svg'
import clock from './images/Clock.svg'
import map from './images/Map.svg'
import imgcard2 from './images/Image-event-2.svg'
import imgcard1 from './images/Image-event-1.svg'
import imgcard3 from './images/Image-event-3.svg'
import imgcard4 from './images/Image-event-4.svg'
import imgcard5 from './images/Image-event-5.svg'
import Navigbar from "./components/navbar-search";
import NavigbarBottom from "./components/navbar-bottom";
import AddButton from "./components/add-button";
import eventsselected from "./images/Events-selezionato.svg";
import interested from "./images/ic_round-star-border.svg";
import participate from "./images/ic_round-check-circle-outline (1).svg";
import going from "./images/going.svg"
import whosgoing from "./images/whosgoing-white.svg";
import dropdown from "./images/gridicons_dropdown.svg"
import popupsport from "./images/image 1.svg"
import threedots from "./images/ph_dots-three-vertical-bold.svg"
import forums from "./images/Forums.svg"

import profile2 from "./images/profile2.svg"
import profile3 from "./images/profile3.svg";
import profile4 from "./images/profile4.svg";
import profile5 from "./images/profile5.svg"

import 'moment/locale/en-gb';
import moment from "moment/moment";
import {nonPartecipo, partecipo, selected} from "./Action";
import {useLocalStorage} from "./useLocalStorage";
import profile1 from "./images/profile1.svg";
import other from "./images/other.svg";
import music from "./images/music.svg";
import party from "./images/party.svg";
import sport from "./images/sport.svg";



export default function Home(){

    const [state,dispatch] = useContext(StateContext)

    const cardh = [
        {   key: 300,
            titolo:'Play in the Park',
            dataStart:moment('2023-02-02, 10:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-02, 11:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            host:'Hosted by the Muse Th.',
            about:'Join us with your kids for a fun morning at the park' ,
            categoria: 'Other',
            img: 'imgcard1',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 301,
            titolo:'Music therapy',
            dataStart:moment('2023-02-02, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-02, 18:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            host:'Hosted by Color Notes',
            about:'Music can be a great therapy for kids with disabilities. Come try it out',
            categoria: 'Music',
            img: 'imgcard2',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 302,
            titolo:'Joe\'s Party',
            dataStart:moment('2023-02-03, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-03, 20:00','YYYY-MM-DD, hh:mm'),
            address:'113 Flams Close, CB4 2TY, UK',
            host:'Hosted by the Mia Johnson',
            about:'Joe is having a fun Peter Pan theme party',
            categoria: 'Party',
            img: 'imgcard5',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 303,
            titolo:'Soccer U10',
            dataStart:moment('2023-02-04, 20:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-04, 21:00','YYYY-MM-DD, hh:mm'),
            address:'13 Congo Street, PT3 1MX, UK',
            host:'Hosted by the MegaSport',
            about:'Fun soccer race for kids that are under 10 years old',
            categoria: 'Sport',
            img: 'imgcard4',
            partecipo: 'false',
            property: 'Esterno'
        },
    ]

    const img = [{key:'imgcard1', img: imgcard1}, {key:'imgcard2', img: imgcard2}, {key:'imgcard5', img: imgcard5}, {key:'imgcard4', img: imgcard4}]
    const imgBig = [{key:'Other', img: other}, {key:'Music', img: music}, {key:'Party', img: party}, {key:'Sport', img: sport}]

    const [cardhome, setCardhome] = useLocalStorage('cardhome', cardh)

    const [prenotazione, setPrenotazione] = useLocalStorage('prenotazioni', state.prenotazioni)
    const [forum, setForum] = useLocalStorage('forums', state.forums)
    const [partecipazioni, setPartecipazioni] = useLocalStorage('partecipazioni', state.partecipazioni)

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

    const [show_sith, setShowSith] = useState(false);
    const handleCloseSith = () => setShowSith(false);
    const handleShowSith = () => setShowSith(true);

    const [show_seventh, setShowSeventh] = useState(false);
    const handleCloseSeventh = () => setShowSeventh(false);
    const handleShowSeventh = () => setShowSeventh(true);

    const [show_eighth, setShowEighth] = useState(false);
    const handleCloseEighth = () => setShowEighth(false);
    const handleShowEighth = () => setShowEighth(true);


    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', width:"100vw", paddingBottom:"10em"}}>

            <Navigbar vevents={eventsselected}
                      vforum={forums}
                      vpeople={people}
                      vcenters={centers}
                      vrec={recbut}
                      vnearme={nearme}
                      value={"cont-menu-rec-nearme"}
            />

            <Container style={{paddingTop:"16em"}}>

                {cardhome.map( p =>
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
                                        <img src={threedots} onClick={()=> {handleShowSith(); dispatch(selected(p.key))}} style={{textAlign:"right"}}/>
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

                {show_sith == false ? <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                <Card.Body>
                                    <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                        {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                    </Card.Text>
                                    <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                        {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Col>
                                <Row>
                                    <Modal.Title className="modal-title-1" style={{fontSize:"25px", marginLeft:"1em"}}>{cardhome.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                                </Row>
                                <Row className="event-subtitle-1" style={{textAlign: 'left', marginLeft:"0.1em", fontSize:"15px"}}>
                                   <p style={{textAlign: 'left'}}>{cardhome.filter(p => p.key===state.id).map(m=>m.host)}</p>
                                </Row>
                            </Col>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">

                            <img src={imgBig.filter(f => f.key == cardhome.filter(g=> g.key == state.id).map(m=> m.categoria)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>

                            <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {cardhome.filter(p => p.key===state.id).map(m=>m.address)}</p>
                            <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                            <p className="about">About</p>
                            <p>{cardhome.filter(p => p.key===state.id).map(m=>m.about)}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            {cardhome.filter(f=> f.key == state.id).map(m=> m.partecipo) == 'false'?
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
                </Modal> : null}

                <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Body className="modal-subtitle-1">
                            <p>Do you wish to participate?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {cardhome.filter(f=> f.key == state.id).map(q=> q.partecipo='true');
                                        cardhome.filter(f=> f.key == state.id).map(m=>{
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
                                    onClick={()=> {cardhome.filter(f=> f.key == state.id).map(q => q.partecipo='false');
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

                <Modal show={show_sith} onHide={handleCloseSith} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Footer className="modal-subtitle-1">
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {handleCloseSith(); handleClose(); handleShowSeventh()}}>
                                Why you're seeing this event
                            </Button>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {handleCloseSith(); handleClose(); handleShowEighth()}}>
                                Not intrested
                            </Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal>

                <Modal show={show_seventh} onHide={handleCloseSeventh} backdrop={"static"} centered>
                    <Modal.Dialog>
                        <Modal.Header>
                            Why you're seeing this event?
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">
                            You have participated in similar events
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {handleCloseSeventh()}}>
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <Modal show={show_eighth} onHide={handleCloseEighth} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Header>
                            Event hidden
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">
                            <p>We'll suggest fewer post like this</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {
                                        let arrayCard
                                        arrayCard= cardhome.filter(f=> f.key != state.id);
                                        setCardhome(arrayCard);
                                        handleCloseEighth();}}>
                                Ok
                            </Button>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> handleCloseEighth()}>
                                Undo
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

        </Container>

            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>


    </Container>
    )

}