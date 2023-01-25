import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/it';
import {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {StateContext} from "./App";
import "./Calendario.css"
import {
    Alert,
    Button,
    ButtonGroup,
    Card,
    CloseButton,
    Col,
    Container,
    DropdownButton,
    Dropdown,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect,
    Nav,
    Navbar,
    Row,
    FormCheck, Modal
} from "react-bootstrap";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {addBooking, cancelBooking, nonPartecipo, selected, selectedSlot} from "./Action";
import {Link, useNavigate} from "react-router-dom";
import NavigbarBottom from "./components/navbar-bottom";
import NavigbarP from "./components/navbar-profile";
import other from "./images/other.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import homeunselected from "./images/home-unselected.svg";
import calendarselected from "./images/Calendar-selected.svg";
import categoriesicon from "./images/categories-appy.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";
import popupsport from "./images/image 1.svg";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import going from "./images/going.svg";
import participate from "./images/ic_round-check-circle-outline (1).svg";
import whosgoing from "./images/whosgoing-white.svg";
import profile1 from "./images/profile1.svg";
import profile4 from "./images/profile4.svg";
import profile3 from "./images/profile3.svg";
import dance_big from "./images/dance_big.svg";
import music from "./images/music.svg";
import party from "./images/party.svg";
import sport from "./images/sport.svg";
import longjumpbig from "./images/longjump-big.svg";
import dancebig from "./images/dance_big.svg";
import fencingbig from "./images/fencing-big.svg";
import backarrow from "./images/backarrow.svg";
import forwardarrow from "./images/forwardarrow.svg";


const localizer = momentLocalizer(moment)



export default function Calendario(){

    const [state,dispatch] = useContext(StateContext)

    const img = [{key:'Other', img: other}, {key:'', img: other}, {key:'Music', img: music}, {key:'Party', img: party}, {key:'Sport', img: sport}]
    const imgCus = [{key:'longjump', img: longjumpbig}, {key:'dance', img: dancebig}, {key:'fencing', img: fencingbig}]

    const [address,setAddress] = useState('')
    const [titolo,setTitolo] = useState('')
    const [about,setAbout] = useState('')
    const [date,setDate] = useState(new Date())
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    const [sel,setSel] = useState('')
    const [categoria,setCategoria] = useState('')

    {/*const [eventi, setEventi] = useState(() => {
        const eventi = JSON.parse(localStorage.getItem('arrayLS'));
        return eventi || state.arrayLS; } )*/}

    const [prenotaz, setPrenotaz] = useState(() => {
        const prenotaz = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotaz || '' } )

    const [controlloPale, setControlloPale] = useState( () => {
        const controlloPale = JSON.parse(localStorage.getItem('pale'));
    return controlloPale })

    const [cardhome, setCardhome] = useState( () => {
        const cardhome = JSON.parse(localStorage.getItem('cardhome'));
        return cardhome })

    const [partecipazioniC, setPartecipazioniC] = useState( () => {
        const partecipazioniC = JSON.parse(localStorage.getItem('partecipazioni'));
        return partecipazioniC })

    const [tipo, setTipo] = useState('')
    const [propriet, setPropriet] = useState('')

    const addHidden = 'false';

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

    const [show_sith, setShowSith] = useState(true);
    const handleCloseSith = () => setShowSith(false);
    const handleShowSith = () => setShowSith(true);

    const [show_seventh, setShowSeventh] = useState(false);
    const handleCloseSeventh = () => setShowSeventh(false);
    const handleShowSeventh = () => setShowSeventh(true);

    const [show_eighth, setShowEighth] = useState(false);
    const handleCloseEighth = () => setShowEighth(false);
    const handleShowEighth = () => setShowEighth(true);

    const [tutorial, setTutorial] = useState(()=> {
        const tutorial = JSON.parse(localStorage.getItem('tutorial'))
        return tutorial
    })

    const navigate = useNavigate();

    let events = [];

    prenotaz.map(p => {
        let event={
            id: p.key,
            title: p.titolo,
            start: moment(p.dataStart,'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
            end: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
            categoria: p.categoria,
            property: p.property
        }
        events.push(event)
    })

    if(controlloPale == 'true'){
        state.palestra.map(p => {
            let event={
                id: p.key,
                title: p.titolo,
                start: moment(p.dataStart,'YYYY-MM-DD, hh:mm').toDate(),
                end: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').toDate(),
                categoria: p.categoria
            }
            events.push(event)
        })
    }

    if (partecipazioniC != null){
        partecipazioniC.map(p => {
            let event = {
                id: p.key,
                title: p.titolo,
                start: moment(p.dataStart, 'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
                end: moment(p.dataEnd, 'YYYY-MM-DD, hh:mm').add(1, 'hour').toDate(),
                categoria: p.categoria,
                property: p.property
            }
            events.push(event)
        })
    }

    let handleSelect = (range) => {
        setSel('true')
        let start= moment(range.start, 'LT')
        let end=  moment(range.end, 'LT')
        let giorno= moment(range.start)
        start=moment(start).format('LT')
        end=moment(end).format('LT')
        giorno= moment(giorno).format('yyyy-MM-DD')
        setOraI(start)
        setOraF(end)
        setDate(giorno)
    }

    let selectSlot = (slotInfo) => {
        setSel('true')
        let giorno= moment(slotInfo.start)
        let start= moment(slotInfo.start, 'LT')
        let end= moment(slotInfo.end, 'LT')
        giorno= moment(giorno).format('yyyy-MM-DD')
        start= moment(start).format('LT')
        end= moment(end).format('LT')
        setOraI(start)
        setOraF(end)
        setDate(giorno)
        dispatch(selectedSlot(giorno, start, end, 'true'))

        navigate('/add', {replace: true})
    }

    const { defaultDate, messages } = useMemo(
        () => ({
            defaultDate: new Date(),
            messages: {

                previous: '<',
                next: '>',

            },
        }),
        [])

    return(
        <Container style={{backgroundColor:"#f5f5f5", }}>
            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>
            <NavigbarBottom home={homeunselected} calendar={calendarselected} profile={profile} settings={settings}/>

            <Container className="bg2" style={{paddingTop:"6.5em", paddingBottom:"0.5em", borderRadius:'1em'}}>
                <Row>
                    <Col xs={1}>
                        <img src={categoriesicon} style={{width:'2.5em', height:'2.5em'}} onClick={() => handleShowEighth()}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container style={{marginTop:"1em", marginBottom:"5em", backgroundColor:"#f5f5f5"}}>
            <Row style={{zIndex:'-5'}}>
                <Col sm={12} xs={12}>

                    <Calendar
                        selectable
                        startAccessor='start'
                        endAccessor='end'
                        localizer={localizer}
                        defaultDate={defaultDate}
                        defaultView={'month'}
                        views={['month','week','day']}
                        events={events}
                        style={{height:'81vh', backgroundColor: 'white', marginBottom: "5px", zIndex:'-1000'}}
                        onSelectEvent={e => {
                            dispatch(selected(e.id))
                            setTipo(e.categoria)
                            setPropriet(e.property)
                            handleShow()
                        }}
                        onSelecting={range => handleSelect(range)}
                        eventPropGetter= {(events) => {
                                let newStyle = {
                                    backgroundColor: "#842DF2",
                                    color: 'black',
                                    borderRadius: "10px",
                                    border: "none"
                                };

                            if (events.categoria === 'Other'){
                                newStyle.backgroundColor = "#842DF2"
                            }
                            if (events.categoria === 'Palestra'){
                                newStyle.backgroundColor = "#FF8C2E"
                            }
                            if (events.categoria === 'Sport'){
                                newStyle.backgroundColor = "#4B7BF8"
                            }
                            if (events.categoria === 'Party'){
                                newStyle.backgroundColor = "#EB506C"
                            }
                            if (events.categoria === 'Music'){
                                newStyle.backgroundColor = "#19BF97"
                            }

                                return {
                                    className: "",
                                    style: newStyle
                                };
                            }}
                        onSelectSlot={ slotInfo => selectSlot(slotInfo)}
                        messages={messages}
                    />
                </Col>

                {tipo != 'Palestra' ?
                    <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Header closeButton>
                            <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                <Card.Body>
                                    <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                        {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                    </Card.Text>
                                    <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                        {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Modal.Title className="modal-title-1">{prenotaz.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">

                            <img src={img.filter(f => f.key == prenotaz.filter(g=> g.key == state.id).map(m=> m.categoria)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>

                            <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                            <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {prenotaz.filter(p => p.key===state.id).map(m=>m.address)} </p>
                            <p className="about">About</p>
                            <p>{prenotaz.filter(p => p.key===state.id).map(m=>m.about)}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{fontSize:"13px",borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}>
                               <Link to={"/editaddevent"}>Edit</Link>
                            </Button>
                            <Button style={{fontSize:"13px", borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                    onClick={()=>{ handleClose(); handleShowSecond()}}
                            >Delete</Button>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal> : null}

                {tipo == 'Palestra' ?
                    <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                    <Modal.Dialog>

                        <Modal.Header closeButton>
                            <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                <Card.Body>
                                    <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                        {state.palestra.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                    </Card.Text>
                                    <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                        {state.palestra.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Modal.Title className="modal-title-1">{state.palestra.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">

                            <img src={dance_big} style={{marginBottom:"0.5em", width:"22em"}}/>

                            <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {state.palestra.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {state.palestra.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {state.palestra.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                            <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {state.palestra.filter(p => p.key===state.id).map(m=>m.address)} </p>
                            <p className="about">About</p>
                            <p>{state.palestra.filter(p => p.key===state.id).map(m=>m.about)}</p>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal> : null}

                {propriet == 'Esterno' ?
                    <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                    <Card.Body>
                                        <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                            {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                        </Card.Text>
                                        <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                            {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Col>
                                    <Row>
                                        <Modal.Title className="modal-title-1" style={{fontSize:"25px", marginLeft:"1em"}}>{partecipazioniC.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                                    </Row>
                                    <Row className="event-subtitle-1" style={{textAlign: 'left', marginLeft:"0.1em", fontSize:"15px"}}>
                                        <p style={{textAlign: 'left'}}>{partecipazioniC.filter(p => p.key===state.id).map(m=>m.host)}</p>
                                    </Row>
                                </Col>
                            </Modal.Header>

                            <Modal.Body className="modal-subtitle-1">

                                <img src={img.filter(f => f.key == partecipazioniC.filter(g=> g.key == state.id).map(m=> m.categoria)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>

                                <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {partecipazioniC.filter(p => p.key===state.id).map(m=>m.address)}</p>
                                <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                                <p className="about">About</p>
                                <p>{partecipazioniC.filter(p => p.key===state.id).map(m=>m.about)}</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button style={{fontSize:"15px", borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                        onClick={()=>{handleClose(); handleShowFourth()}}><img src={participate}/> Don't participate</Button>

                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic"  style={{borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0em"}}>
                                        <img src={whosgoing}/>  Who's Going
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/miajohnson">
                                            <img  src={profile1} style={{height: '2em', width: '2rem', marginRight:"0.5em"}} />
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

                {propriet == 'EsternoCus' ?
                    <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Card style={{backgroundColor:"#4b7bf8", color:"white"}}>
                                    <Card.Body>
                                        <Card.Text className="event-month-popup" style={{textAlign: 'center'}}>
                                            {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('MMM').toUpperCase())}
                                        </Card.Text>
                                        <Card.Text className="event-day-popup" style={{textAlign: 'center'}}>
                                            {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D').toUpperCase())}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Col>
                                    <Row>
                                        <Modal.Title className="modal-title-1" style={{fontSize:"25px", marginLeft:"1em"}}>{partecipazioniC.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                                    </Row>
                                    <Row className="event-subtitle-1" style={{textAlign: 'left', marginLeft:"0.1em", fontSize:"15px"}}>
                                        <p style={{textAlign: 'left'}}>{partecipazioniC.filter(p => p.key===state.id).map(m=>m.host)}</p>
                                    </Row>
                                </Col>
                            </Modal.Header>

                            <Modal.Body className="modal-subtitle-1">

                                <img src={imgCus.filter(f => f.key == partecipazioniC.filter(g=> g.key == state.id).map(m=> m.img)).map(c => c.img)} style={{marginBottom:"0.5em", width:"22em"}}/>

                                <p className="event-subsubtitle-3"> <img src={clock} className="icon"/> {partecipazioniC.filter(p => p.key===state.id).map(m=>m.address)}</p>
                                <p className="event-subsubtitle-3"> <img src={map} className="icon"/> {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {partecipazioniC.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>
                                <p className="about">About</p>
                                <p>{partecipazioniC.filter(p => p.key===state.id).map(m=>m.about)}</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button style={{fontSize:"15px", borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0em"}}
                                        onClick={()=>{handleClose(); handleShowFourth()}}><img src={participate}/> Don't participate</Button>

                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic"  style={{borderColor:"#eb506c", color:"white", backgroundColor:"#eb506c", borderWidth:"2px", borderRadius:"10px", marginRight:"0em"}}>
                                        <img src={whosgoing}/>  Who's Going
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/miajohnson">
                                            <img  src={profile1} style={{height: '2em', width: '2rem', marginRight:"0.5em"}} />
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
                            <p>Do you wish to delete?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={()=> {dispatch(cancelBooking(state.id)); handleCloseSecond(); handleShowThird()}}>
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
                                    onClick={()=> {setPrenotaz(state.prenotazioni); localStorage.setItem('prenotazioni', JSON.stringify(state.prenotazioni)); handleCloseThird()}}>
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
                                    onClick={()=> {
                                        setPartecipazioniC(state.partecipazioni)
                                        localStorage.setItem('partecipazioni', JSON.stringify(state.partecipazioni));
                                        localStorage.setItem('cardhome', JSON.stringify(cardhome)); handleCloseFifth()}}>
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                {addHidden==="true" ? <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row>

                        <Card className='form' border='dark' style={{background: 'linear-gradient(to top, red 10%, black 100%)', color: "white"}}>
                            <Card.Body>
                                <Card.Title style={{fontSize: "30px"}}>Add Event</Card.Title>

                                <FormGroup style={{marginBottom: "10px"}}>
                                    <FormLabel><b>Title*</b></FormLabel>
                                    <FormControl type='text' value={titolo} style={{textAlign:"left"}} placeholder='Title' onChange={e=> setTitolo(e.target.value)}/>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px"}}>
                                    <FormLabel><b>Address*</b></FormLabel>
                                    <FormControl type='text' value={address} style={{textAlign:"left"}} placeholder='Address' onChange={e=> setAddress(e.target.value)}/>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px"}}>
                                    <FormLabel><b>About</b></FormLabel>
                                    <FormControl type='text' value={about} style={{textAlign:"left"}} placeholder='About' onChange={e=> setAbout(e.target.value)}/>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px"}}>
                                    <FormLabel><b>Categoria</b></FormLabel>
                                    <FormSelect value={categoria} style={{textAlign:"center"}} onChange={e=> setCategoria(e.target.value)}>
                                        <option id={0}>---</option>
                                        <option id={1}>Sport</option>
                                        <option id={2}>Park</option>
                                    </FormSelect>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col md={12} xs={12}>
                                            <FormLabel><b>Day*</b></FormLabel>
                                            <FormControl type='date' value={date} style={{textAlign:"center"}} onChange={e => setDate(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col lg={5} md={5} xs={12}>
                                            <FormLabel><b>Start*</b></FormLabel>
                                            <FormControl type='time' value={oraI} style={{textAlign:"center"}} onChange={e => setOraI(e.target.value)}/>
                                        </Col>
                                        <Col lg={5} md={5} xs={12}>
                                            <FormLabel><b>End*</b></FormLabel>
                                            <FormControl type='time' value={oraF} style={{textAlign:"center"}} onChange={e => setOraF(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col> : null}

            </Row>
            </Container>

            {tutorial == true ?
            <Modal show={show_sith} onHide={handleCloseSith} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={()=> {navigate('/home', {replace: true}); localStorage.setItem('tutorial', 'false');}}/>
                    <Modal.Body className="modal-subtitle-1">
                        <Row>
                            <p style={{textAlign:'center', fontSize:'1.5em'}}>This is the <span style={{fontWeight: 'bold', color:'#842DF2'}}>Calendar</span>!</p>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>From here you can check your planned activities,</div>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}><span style={{fontWeight: 'bold', color:'#EB506C'}}>events</span> in which you participate and add new ones.</div>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{textAlign:'left'}}>
                                <img src={backarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => navigate('/tutorial', {replace: true})}/>
                            </Col>
                            <Col xs={6} style={{textAlign:'right'}}>
                                <img src={forwardarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => {handleCloseSith(); handleShowSeventh()}}/>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>
            : null}

            <Modal show={show_seventh} onHide={handleCloseSeventh} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={()=> {navigate('/home', {replace: true}); localStorage.setItem('tutorial', 'false');}}/>
                    <Modal.Body className="modal-subtitle-1">
                        <Row>
                            <div style={{textAlign:'center', fontSize:'1.5em'}}>Calendar can be visualized by day, by week or by month</div>

                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{textAlign:'left'}}>
                                <img src={backarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => handleShowSith()}/>
                            </Col>
                            <Col xs={6} style={{textAlign:'right'}}>
                                <img src={forwardarrow} style={{width:'2.5em', height:'2.5em'}} onClick={() => navigate('/profile', {replace: true})}/>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>


            <Modal show={show_eighth} onHide={handleCloseEighth} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={()=> handleCloseEighth()}>
                        <h2>Categories</h2>
                    </Modal.Header>
                    <Modal.Body className="modal-subtitle-1">
                        <Row>
                            <Col xs={6} style={{fontSize: "20px"}}>Sport</Col>
                            <Col xs={6} style={{backgroundColor: "#4B7BF8", borderRadius:"10px"}}></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{fontSize: "20px"}}>Party</Col>
                            <Col xs={6} style={{backgroundColor: "#EB506C", borderRadius:"10px"}}></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{fontSize: "20px"}}>Music</Col>
                            <Col xs={6} style={{backgroundColor: "#19BF97", borderRadius:"10px"}}></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={6} style={{fontSize: "20px"}}>Other</Col>
                            <Col xs={6} style={{backgroundColor: "#842DF2", borderRadius:"10px"}}></Col>
                        </Row>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>

        </Container>

    )
}