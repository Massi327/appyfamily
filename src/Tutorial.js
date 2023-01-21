import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link, useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import helpselected from "./images/tutorialselected.svg";
import NavigbarP from "./components/navbar-profile";
import homeunselected from "./images/home-unselected.svg";
import calendarunselected from "./images/Calendar.svg";
import profileunselected from "./images/Profile-unselected.svg";
import settingsunselected from "./images/Settings.svg";
import NavigbarBottom from "./components/navbar-bottom";
import eventsselected from "./images/Events-selezionato.svg";
import forums from "./images/Forums.svg";
import people from "./images/People.svg";
import centers from "./images/centers-unselected.svg";
import recbut from "./images/recommended-button.svg";
import nearme from "./images/near-me.svg";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";
import {selected} from "./Action";
import moment from "moment";
import threedots from "./images/ph_dots-three-vertical-bold.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import imgcard1 from "./images/Image-event-1.svg";
import imgcard2 from "./images/Image-event-2.svg";
import imgcard5 from "./images/Image-event-5.svg";
import imgcard4 from "./images/Image-event-4.svg";
import forwardarrow from "./images/forwardarrow.svg";
import other from "./images/other.svg";
import music from "./images/music.svg";
import party from "./images/party.svg";
import sport from "./images/sport.svg";
import {useLocalStorage} from "./useLocalStorage";
import backarrow from "./images/backarrow.svg";

export default function Tutorial(){

    const [state,dispatch] = useContext(StateContext)

    const img = [{key:'imgcard1', img: imgcard1}, {key:'imgcard2', img: imgcard2}, {key:'imgcard5', img: imgcard5}, {key:'imgcard4', img: imgcard4}]

    const [cardhome, setCardhome] = useState(()=> {
        const cardhome = JSON.parse(localStorage.getItem('cardhome'))
        return cardhome
    })

    const [tutorial, setTutorial] = useState(()=> {
        const tutorial = JSON.parse(localStorage.getItem('tutorial'))
        return tutorial
    })

    const navigate = useNavigate()

    const [show_seventh, setShowSeventh] = useState(false);
    const handleCloseSeventh = () => setShowSeventh(false);
    const handleShowSeventh = () => setShowSeventh(true);

    const [show_eighth, setShowEighth] = useState(true);
    const handleCloseEighth = () => setShowEighth(false);
    const handleShowEighth = () => setShowEighth(true);

    return(

        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'100vh', width:"100vw", paddingBottom:"8em"}}>

            <Navigbar vevents={eventsselected} vforum={forums} vpeople={people} vcenters={centers} vrec={recbut} vnearme={nearme} value={"cont-menu-rec-nearme"}/>

            <Container style={{paddingTop:"16em"}}>
            {  cardhome.map( p =>
                <Card className="post" key={p.key} style={{ minHeight: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
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

            <Modal show={show_eighth} onHide={handleCloseEighth} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={()=> navigate('/home', {replace: true})}/>

                    <Modal.Body className="modal-subtitle-1">
                        <Row>
                        <p style={{textAlign:'center', fontSize:'1.5em'}}>Welcome, this is the <span style={{fontWeight: 'bold', color:'#EB506C'}}>Home</span>!</p>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>From here you can see</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>and participate </div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>in <span style={{fontWeight: 'bold', color:'#EB506C'}}>events</span> in your area,</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>participate in <span style={{fontWeight: 'bold', color:'#19BF97'}}>forum</span> and</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>look wich <span style={{fontWeight: 'bold', color:'#FF8C2E'}}>centers</span> are available</div>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{textAlign:'left'}}>

                            </Col>
                            <Col xs={6} style={{textAlign:'right'}}>
                                <img src={forwardarrow} style={{width:'2.5em', height:'2.5em'}} onClick={()=> {handleCloseEighth(); handleShowSeventh()}}/>
                            </Col>
                        </Row>
                    </Modal.Body>

                </Modal.Dialog>
            </Modal>

            <Modal show={show_seventh} onHide={handleCloseSeventh} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={()=> navigate('/home', {replace: true})}/>
                    <Modal.Body className="modal-subtitle-1">
                        <Row>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>From here you can also</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>add your own <span style={{fontWeight: 'bold', color:'#EB506C'}}>event</span> </div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>or create a <span style={{fontWeight: 'bold', color:'#19BF97'}}>discussion</span></div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>in <span style={{fontWeight: 'bold', color:'#19BF97'}}>forum</span> page.</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>In addition,</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>you can find your <span style={{fontWeight: 'bold', color:'#3634A0'}}>notifications</span></div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>and <span style={{fontWeight: 'bold', color:'#3634A0'}}>messages</span> on each page.</div>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{textAlign:'left'}}>
                                <img src={backarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => {handleShowEighth(); handleCloseSeventh()}}/>
                            </Col>
                            <Col xs={6} style={{textAlign:'right'}}>
                                <img src={forwardarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => {localStorage.setItem('tutorial', 'true'); navigate('/calendar', {replace: true})}}/>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>
            <AddButton/>

            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>
        </Container>
    )

}