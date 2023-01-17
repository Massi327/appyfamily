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
import {addBooking, selected, selectedSlot} from "./Action";
import {Link, useNavigate} from "react-router-dom";
import NavigbarP from "./components/navbar-profile";

const localizer = momentLocalizer(moment)

export default function EditAddEvent(){
    const [state,dispatch] = useContext(StateContext)

    const [prenotazioni, setPrenotazioni] = useState(() => {
        const prenotazioni = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotazioni} )

    const [address,setAddress] = useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.address))
    const [titolo,setTitolo] = useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.titolo))
    const [about,setAbout] = useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.about))
    const [date,setDate] = useState(() => prenotazioni.filter(f => f.key == state.id).map(p => moment(p.dataStart, 'DD-MM-YYYY')))
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    const [badge,setBadge] = useState('')
    const [categoria,setCategoria] = useState(() => prenotazioni.filter(f => f.key == state.id).map(p => p.categoria))
    const calendariohidden = 'false';

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_second, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const [dataIM,setDataIM] = useState('')
    const [dataFM,setDataFM] = useState('')
    const [giornoIM,setGiornoIM] = useState('')
    const [giornoFM,setGiornoFM] = useState('')


    let events = [];

    {/*
    prenotazioni.filter(f => f.key == state.id).map(p => {


        setDate(moment(p.dataStart, 'YYYY-MM-DD').toDate())
        setOraI(''
            //moment(p.dataStart,'hh:mm').toDate().toString
            )
        setOraF(''
            //moment(p.dataEnd,'hh:mm').toDate().toString
        )
    })*/}

    return(
        <Container fluid>

            <NavigbarP/>

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
                                <CloseButton variant={'black'} onClick={() => {navigate('/calendar', {replace: true})}}/>
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

                                    let calendarDate = moment(date).format('YYYY-MM-DD')
                                    let dataS=moment(calendarDate+', '+oraI,'YYYY-MM-DD, hh:mm a')
                                    let dataF=moment(calendarDate+', '+oraF,'YYYY-MM-DD, hh:mm a')

                                    let giornoI = moment(state.giorno+', '+state.start, 'YYYY-MM-DD, hh:mm a')
                                    let giornoF = moment(state.giorno+', '+state.end, 'YYYY-MM-DD, hh:mm a')

                                    setDataIM(dataS)
                                    setDataFM(dataF)
                                    setGiornoIM(giornoI)
                                    setGiornoFM(giornoF)

                                    if(state.c == 'false'){
                                        if(dataS.isBefore(moment()) || dataF.isBefore(moment())) {
                                            setBadge('precedente')
                                        }else{
                                            handleShow()
                                        }
                                    }else if(state.c == 'true'){
                                        if(giornoI.isBefore(moment()) || giornoF.isBefore(moment())){
                                            setBadge('precedente')
                                        }else{
                                            handleShow()
                                        }
                                    }
                                }}>Publish</Button>

                            </Card.Body>
                        </Card>
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