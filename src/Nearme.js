import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Dropdown, Modal, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import eventsselected from "./images/Events-selezionato.svg";
import forum from "./images/Forum-unselected.svg";
import centers from "./images/centers-unselected.svg";
import people from "./images/People.svg";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import imgcard2 from "./images/Image-event-2.svg";
import nearmebut from "./images/nearme-button.svg";
import rec from "./images/Recommendedn.svg"
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import imgcard5 from "./images/Image-event-5.svg";
import imgcard4 from "./images/Image-event-4.svg";
import forums from "./images/Forums.svg"
import moment from "moment";
import {nonPartecipo, partecipo, selected} from "./Action";
import other from "./images/other.svg";
import music from "./images/music.svg";
import party from "./images/party.svg";
import sport from "./images/sport.svg";
import {useLocalStorage} from "./useLocalStorage";

import participate from "./images/ic_round-check-circle-outline (1).svg";

import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import profile3 from "./images/profile3.svg";
import going from "./images/going.svg"
import whosgoing from "./images/whosgoing-white.svg";
import profile2 from "./images/profile2.svg";


export default function Nearme(){

    const [state,dispatch] = useContext(StateContext)

    const cardnear = [
        {   key: 300,
            titolo:'Princess party',
            data: 'NOW',
            distance: '2.5 km',
            dataStart:moment('2023-01-30, 15:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-30, 16:00','YYYY-MM-DD, hh:mm'),
            address:'9 Cherry Street, NR3 1TX, UK',
            host:'Hosted by the Clara May',
            about:'Come visit the beautiful princess castle with your pretty princess dresses. We will have lots of fun',
            categoria: 'Party',
            img: 'imgcard5',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 301,
            titolo:'Sports day',
            data: 'SOON',
            distance: '1.5km',
            dataStart:moment('2023-01-30, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-30, 18:00','YYYY-MM-DD, hh:mm'),
            address:'173 Balmore Street, NR3 3TX, UK',
            host:'Hosted by BabyGym',
            about:'boh',
            categoria: 'Sports',
            img: 'imgcard4',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 302,
            titolo:'Picnic',
            data:'SOON',
            distance: '3.4km',
            dataStart:moment('2023-01-30, 17:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-30, 20:00','YYYY-MM-DD, hh:mm'),
            address:'113 Flams Close, CB4 2TY, UK',
            host:'Hosted by Mia Johnson',
            about:'boh',
            categoria: 'Other',
            img: 'imgcard1',
            partecipo: 'false',
            property: 'Esterno'
        },
        {   key: 303,
            titolo:'Lalaland',
            data: 'TODAY',
            distance: '300m',
            dataStart:moment('2023-01-30, 20:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-30, 21:00','YYYY-MM-DD, hh:mm'),
            address:'13 Congo Street, PT3 1MX, UK',
            host:'Hosted by the Musicalz',
            about:'boh',
            categoria: 'Music',
            img: 'imgcard2',
            partecipo: 'false',
            property: 'Esterno'
        },
    ]

    const img = [{key:'imgcard1', img: imgcard1}, {key:'imgcard2', img: imgcard2}, {key:'imgcard5', img: imgcard5}, {key:'imgcard4', img: imgcard4}]
    const imgBig = [{key:'Other', img: other}, {key:'Music', img: music}, {key:'Party', img: party}, {key:'Sport', img: sport}]
    const [cardhome, setCardhome] = useLocalStorage('cardhome', cardnear)


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

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh'}}>
            <Navigbar vevents={eventsselected}
                      vforum={forums}
                      vpeople={people}
                      vcenters={centers}
                      vrec={rec}
                      vnearme={nearmebut}
            />
            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>


            <Container style={{paddingTop:"16em"}}>


                {cardnear.map( p =>
                    <Card className="post" key={p.key} style={{ minHeight: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}
                          onClick={()=> {handleShow(); dispatch(selected(p.key))}}>
                        <Card.Img className="cardimg" src={img.filter(f => f.key == p.img).map(c => c.img)} style={{minHeight: '5em', maxWidth: "9em", marginLeft:"0.5em", width: '10rem', verticalAlign:'center'}} />
                        <Card.Body>
                            <Card.Text className="event-time-1">
                                <Row>
                                    <Col>
                                        <h5 style={{textAlign:"left"}}>{p.data}</h5>
                                    </Col>
                                    <Col style={{backgroundColor:"#19bf97", marginTop:"-0.5em", marginBottom:"0.7em", color:"white"}}>{p.distance}</Col>
                                    <Col xs={2}>
                                        <img src={threedots} style={{textAlign:"right"}}/>
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
                <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                <Card.Body>
                                    <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                        {cardnear.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                    </Card.Text>
                                    <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                        {cardnear.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Col>
                                <Row>
                                    <Modal.Title className="modal-title-1" style={{fontSize:"25px", marginLeft:"1em"}}>{cardnear.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                                </Row>
                                <Row className="event-subtitle-1" style={{textAlign: 'left', marginLeft:"0.1em", fontSize:"15px"}}>
                                    <p style={{textAlign: 'left'}}>{cardnear.filter(p => p.key===state.id).map(m=>m.host)}</p>
                                </Row>
                            </Col>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">

                            <img src={imgBig.filter(f => f.key == cardnear.filter(g=> g.key == state.id).map(m=> m.categoria)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>

                            <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {cardnear.filter(p => p.key===state.id).map(m=>m.address)}</p>
                            <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {cardnear.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {cardnear.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {cardnear.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                            <p className="about">About</p>
                            <p>{cardnear.filter(p => p.key===state.id).map(m=>m.about)}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            {cardnear.filter(f=> f.key == state.id).map(m=> m.partecipo) == 'false'?
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
                                    <Dropdown.Item href="/sullivanevents">
                                        <img  src={profile2} style={{height: '2em', width: '2rem', marginRight:"0.5em"}} />
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
                                    onClick={()=> {cardnear.filter(f=> f.key == state.id).map(q=> q.partecipo='true');
                                        cardnear.filter(f=> f.key == state.id).map(m=>{
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
                                    onClick={()=> {cardnear.filter(f=> f.key == state.id).map(q => q.partecipo='false');
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





            </Container>

        </Container>
    )

}