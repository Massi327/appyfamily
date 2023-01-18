import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/it';
import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import "./Add.css"
import {
    Alert,
    Button, ButtonGroup,
    Card,
    CloseButton,
    Col,
    Container,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect, Modal, Nav,
    Navbar,
    Row
} from "react-bootstrap";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {addBooking, cancelBooking, editBooking, selected, selectedSlot} from "./Action";
import {Link, useNavigate} from "react-router-dom";
import NavigbarP from "./components/navbar-profile";
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";
import {useLocalStorage} from "./useLocalStorage";

const localizer = momentLocalizer(moment)

export default function EditAddEvent(){
    const [state,dispatch] = useContext(StateContext)

    const [prenotazioni, setPrenotazioni] = useState(() => {
        const prenotazioni = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazioni || '' } )

    const [address,setAddress] = useLocalStorage('address', prenotazioni.filter(f => f.key == state.id).map(p => p.address))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.address))
    const [titolo,setTitolo] = useLocalStorage('titolo', prenotazioni.filter(f => f.key == state.id).map(p => p.titolo))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.titolo))
    const [about,setAbout] = useLocalStorage('about', prenotazioni.filter(f => f.key == state.id).map(p => p.about))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.about))
    const [date,setDate] = useLocalStorage('date', prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataStart, 'YYYY-MM-DD').format('yyyy-MM-DD')))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataStart, 'YYYY-MM-DD').format('yyyy-MM-DD')))
    const [oraI,setOraI] = useLocalStorage('oraI', prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataStart).format('hh:mm')))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataStart).format('hh:mm')))
    const [oraF,setOraF] = useLocalStorage('oraF', prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataEnd).format('hh:mm')))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataEnd).format('hh:mm')))
    const [categoria,setCategoria] = useLocalStorage('cate', prenotazioni.filter(f => f.key == state.id).map(p => p.categoria))
        //useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.categoria))

    const calendariohidden = 'false';

    const dataNow = moment(new Date()).format('YYYY-MM-DD, hh:mm a')

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_second, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const [show_third, setShowThird] = useState(false);
    const handleCloseThird = () => setShowThird(false);
    const handleShowThird = () => setShowThird(true);

    const [dataIM,setDataIM] = useState('')
    const [dataFM,setDataFM] = useState('')

    return(
        <Container fluid>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>

            <Row>
                {calendariohidden=="true" ? <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Calendar
                        selectable
                        startAccessor='start'
                        endAccessor='end'
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView={'month'}
                        views={['month','week','day']}
                        events={''}
                        style={{height:'81vh', backgroundColor: 'white', marginBottom: "5px"}}
                        onSelectEvent={e => {dispatch(selected(e.id, e.resourceId))}}
                    />
                </Col> : null}
                <Col md={6} sm={12} xs={12}>
                    <Row>

                        <Card className='form' style={{background: '#f5f5f5', paddingTop:"5em", color: "black", borderWidth: "0"}}>
                            <Card.Body style={{marginLeft:"1em", marginRight:"1em"}}>
                                <CloseButton variant={'black'} onClick={() => {
                                    setTitolo('')
                                    setAddress('')
                                    setAbout('')
                                    setCategoria('')
                                    setDate('')
                                    setOraI('')
                                    setOraF('')
                                    navigate(-1)
                                   }}/>
                                <Card.Title style={{fontSize: "30px", marginTop: "0.3em"}} className="title-2">Edit Event</Card.Title>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <FormLabel className="subtitle">Title *</FormLabel>
                                    <FormControl type='text' value={titolo} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='Title' onChange={e=> setTitolo(e.target.value)}/>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <FormLabel className="subtitle">Address *</FormLabel>
                                    <FormControl type='text' value={address} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='Address' onChange={e=> setAddress(e.target.value)}/>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <FormLabel className="subtitle">About</FormLabel>
                                    <FormControl type='text' value={about} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='About' onChange={e=> setAbout(e.target.value)}/>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <FormLabel className="subtitle">Category</FormLabel>
                                    <FormSelect value={categoria} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e=> setCategoria(e.target.value)}>

                                        {state.categoriav.map(cat => (
                                            <option key={Math.random()} value={cat.value}>{cat}</option>
                                        ))}

                                    </FormSelect>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col md={12} xs={12}>
                                            <FormLabel className="subtitle">Day *</FormLabel>
                                            <FormControl type='date' value={date} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => setDate(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col lg={5} md={5} xs={12}>
                                            <FormLabel className="subtitle">Start*</FormLabel>
                                            <FormControl type='time' value={oraI} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => setOraI(e.target.value)}/>
                                        </Col>
                                        <Col lg={5} md={5} xs={12}>
                                            <FormLabel className="subtitle">End*</FormLabel>
                                            <FormControl type='time' value={oraF} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => setOraF(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}} onClick={() =>{
                                    setTitolo('')
                                    setAddress('')
                                    setAbout('')
                                    setCategoria('')
                                    setDate(moment())
                                    setOraI('')
                                    setOraF('')
                                }}>
                                    Cancel
                                </Button>

                                <Button style={{backgroundColor:"#eb506c", color:"white", borderWidth:"2px", borderColor:"#eb506c", borderRadius:"10px"}} disabled={bottoneDisabilitato(address, titolo, oraI, oraF, date, state.giorno, state.start, state.end, state.c)} variant='dark' onClick={() => {

                                    let calendarDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD')
                                    let dataS=moment(calendarDate+', '+oraI,'YYYY-MM-DD, hh:mm a')
                                    let dataF=moment(calendarDate+', '+oraF,'YYYY-MM-DD, hh:mm a')

                                    setDataIM(dataS)
                                    setDataFM(dataF)

                                        if(dataS.isBefore(moment()) || dataF.isBefore(moment())) {
                                            dispatch(cancelBooking(state.id))
                                            handleShowThird()
                                        }else{
                                            handleShow()
                                        }
                                    }
                                }>Publish</Button>
                            </Card.Body>
                        </Card>

                        <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title className="modal-title-1">Add event to Calendar</Modal.Title>
                                </Modal.Header>

                                <Modal.Body className="modal-subtitle-1">
                                    <p>Are you sure you want to add this event to the Calendar?</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                            onClick={handleClose}
                                    >Cancel</Button>
                                    <Button style={{backgroundColor:"#eb506c", color:"white", borderWidth:"2px", borderColor:"#eb506c", borderRadius:"10px"}}
                                            onClick={() => {

                                                    dispatch(editBooking(dataIM, dataFM, address, titolo, about, categoria))
                                                    setAddress('')
                                                    setTitolo('')
                                                    setAbout('')
                                                    setDate(moment())
                                                    setOraI('')
                                                    setOraF('')
                                                    setCategoria('')

                                                handleClose()
                                                handleShowSecond()
                                            }}>
                                        Change
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal>

                        <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                            <Modal.Dialog>

                                <Modal.Body className="modal-subtitle-1">
                                    <p>CAMBIATO</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                            onClick={() => localStorage.setItem('prenotazioni', JSON.stringify(state.prenotazioni))}
                                    >
                                        <Link to={"/calendar"}>
                                            Ok
                                        </Link>
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal>

                        <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                            <Modal.Dialog>

                                <Modal.Body className="modal-subtitle-1">
                                    <p>The event has been added</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                            onClick={() => localStorage.setItem('prenotazioni', JSON.stringify(state.prenotazioni))}
                                    >
                                        <Link to={"/profile"}>
                                            Ok
                                        </Link>
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal>



                        <Modal show={show_third} onHide={handleCloseThird} backdrop={"static"} centered>
                            <Modal.Dialog>

                                <Modal.Body className="modal-subtitle-1">
                                    <p>Data Precedente, mettere una data successiva a {dataNow}</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                            onClick={()=> {handleCloseThird()}}>
                                        Ok
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal>

                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

function bottoneDisabilitato(address, titolo, oraI, oraF, date, oraIV, oraFV, dateV, c) {
    let disabilitato;

    if(c == 'true'){
        if (address!='' && titolo!='' && oraIV!=null && oraFV!='' && dateV!='')
        {
            disabilitato= false;
        }else {
            disabilitato= true;
        }
    }else if (c == 'false'){
        if (address!='' && titolo!='' && oraI!=null && oraF!='' && date!='')
        {
            disabilitato= false;
        }else {
            disabilitato= true;
        }
    }

    return(disabilitato)
}