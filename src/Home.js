import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Image, Modal, Nav, Navbar, Row} from "react-bootstrap";
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
import participate from "./images/ic_round-check-circle-outline.svg";
import whosgoing from "./images/material-symbols_emoji-people-rounded.svg";
import dropdown from "./images/gridicons_dropdown.svg"
import popupsport from "./images/image 1.svg"
import threedots from "./images/ph_dots-three-vertical-bold.svg"
import forums from "./images/Forums.svg"

import 'moment/locale/en-gb';
import moment from "moment/moment";
import {selected} from "./Action";
import {useLocalStorage} from "./useLocalStorage";



export default function Home(){

    const [state,dispatch] = useContext(StateContext)

    const cardh = [
        {   key: 300,
            titolo:'Play in the Park',
            dataStart:moment('2023-02-02, 10:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-02, 11:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Hosted by the Muse Th.',
            categoria: 'Esterno',
            img: 'imgcard1'
        },
        {   key: 301,
            titolo:'Music therapy',
            dataStart:moment('2023-02-02, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-02, 18:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Hosted by Color Notes',
            categoria: 'Esterno',
            img: 'imgcard2'
        },
        {   key: 302,
            titolo:'Joe\'s Party',
            dataStart:moment('2023-02-03, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-03, 20:00','YYYY-MM-DD, hh:mm'),
            address:'113 Flams Close, CB4 2TY, UK',
            about:'Hosted by the Mia Johnson',
            categoria: 'Esterno',
            img: 'imgcard5'
        },
        {   key: 303,
            titolo:'Soccer U10',
            dataStart:moment('2023-02-04, 20:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-02-04, 21:00','YYYY-MM-DD, hh:mm'),
            address:'13 Congo Street, PT3 1MX, UK',
            about:'Hosted by the MegaSport',
            categoria: 'Esterno',
            img: 'imgcard4'
        },
    ]

    const img = [{key:'imgcard1', img: imgcard1}, {key:'imgcard2', img: imgcard2}, {key:'imgcard5', img: imgcard5}, {key:'imgcard4', img: imgcard4}]

    const [cardhome, setCardhome] = useLocalStorage('cardhome', cardh)

    const [prenotazione, setPrenotazione] = useLocalStorage('prenotazioni', state.prenotazioni)
    const [forum, setForum] = useLocalStorage('forums', state.forums)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', width:"100vw"}}>

            {/*<Row style={{backgroundColor:"red"}}>
                <p>balbsjaksd</p>
            </Row>
            <Container  style={{backgroundColor:"red"}}>
                <p>balbsjaksd</p>
            </Container>*/}

            <Navigbar vevents={eventsselected}
                      vforum={forums}
                      vpeople={people}
                      vcenters={centers}
                      vrec={recbut}
                      vnearme={nearme}
                      value={"cont-menu-rec-nearme"}
            />

            <Container style={{paddingTop:"15em"}}>

                {cardhome.map( p =>
                    <Card className="post" key={p.key} style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}} onClick={()=> {handleShow(); dispatch(selected(p.key))}}>
                        <Card.Img className="cardimg" src={img.filter(f => f.key == p.img).map(c => c.img)} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
                        <Card.Body>
                            <Card.Text className="event-time-1">
                                <Row>
                                    <Col>
                                        <h5 style={{textAlign:"left"}}>{moment(p.dataStart).locale('en').format('MMM D').toUpperCase()} • {moment(p.dataStart).locale('en').format('h:mm a').toUpperCase()}</h5>
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
                                        {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                    </Card.Text>
                                    <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                        {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Modal.Title className="modal-title-1">{cardhome.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">

                            <img src={popupsport} style={{marginBottom:"0.5em", width:"22em"}}/>

                            <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {cardhome.filter(p => p.key===state.id).map(m=>m.address)}</p>
                            <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {cardhome.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                            <p className="about">About</p>
                            <p>{cardhome.filter(p => p.key===state.id).map(m=>m.about)}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{fontSize:"13px",borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                    onClick={handleClose}
                            ><img src={interested}/> Interested</Button>
                            <Button style={{fontSize:"13px", borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                    onClick={handleClose}
                            ><img src={participate}/> Participate</Button>
                            <Button style={{fontSize:"13px",borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                    onClick={handleClose}
                            ><img src={whosgoing}/> Who's going<img src={dropdown} style={{marginRight:"-10px"}}/></Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>


        </Container>

            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>


    </Container>
    )

}