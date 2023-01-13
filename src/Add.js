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
import {initialState} from "./Reducer";
import { useHistory } from "react-router-dom";
import NavigbarP from "./components/navbar-profile";

const localizer = momentLocalizer(moment)

export default function Add(){

    const [state,dispatch] = useContext(StateContext)

    const [address,setAddress] = useState('')
    const [titolo,setTitolo] = useState('')
       // () => {const titolo = JSON.parse(localStorage.getItem('titolo'));return titolo || ""; } )
    const [about,setAbout] = useState('')
    const [date,setDate] = useState(new Date())
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    //const [sala,setSala] = useState(1)
    const [badge,setBadge] = useState('')
    const [categoria,setCategoria] = useState('')
    const calendariohidden = 'false';

    const [ls,setLS] = useState('false')
    const [pr,setPR] = useState('false')

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    {/*useEffect(() => {
        localStorage.setItem('titolo', JSON.stringify(titolo))
    }, [titolo])*/}

    return(
        <Container fluid>

            <NavigbarP/>

            <Row style={{marginTop:'5em'}}>
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

                        <Card className='form' style={{background: '#f5f5f5', color: "black", borderWidth: "0"}}>
                            <Card.Body style={{marginLeft:"1em", marginRight:"1em"}}>
                                <CloseButton variant={'black'} onClick={() => navigate(-1)}/>
                                <Card.Title style={{fontSize: "30px", marginTop: "0.3em"}} className="title-2">Add Event</Card.Title>

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

                                {state.c == 'false' ? <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col md={12} xs={12}>
                                            <FormLabel className="subtitle">Day *</FormLabel>
                                            <FormControl type='date' value={date} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => setDate(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup> :
                                    <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                        <Row className={"justify-content-center"}>
                                            <Col md={12} xs={12}>
                                                <FormLabel className="subtitle">Day *</FormLabel>
                                                <FormControl type='date' value={state.giorno} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => {setDate(e.target.value)
                                                    dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), state.start, state.end, 'false'))
                                                    setOraI(state.start)
                                                    setOraF(state.end)}}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>}

                                {state.c == 'false' ? <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
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
                                </FormGroup> : <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                        <Row className={"justify-content-center"}>
                                            <Col lg={5} md={5} xs={12}>
                                                <FormLabel className="subtitle">Start*</FormLabel>
                                                <FormControl type='time' value={state.start} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => {setOraI(e.target.value)
                                                    dispatch(selectedSlot(state.giorno, moment('','yyyy-MM-DD').format('LT'), state.end, 'false'))
                                                    setDate(state.giorno)
                                                    setOraF(state.end)}}/>
                                            </Col>
                                            <Col lg={5} md={5} xs={12}>
                                                <FormLabel className="subtitle">End*</FormLabel>
                                                <FormControl type='time' value={state.end} style={{textAlign:"center", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} onChange={e => {setOraF(e.target.value)
                                                    dispatch(selectedSlot(state.giorno, state.start, moment('','yyyy-MM-DD').format('LT'), 'false'))
                                                    setDate(state.giorno)
                                                    setOraI(state.start)}}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>}

                                <Button onClick={() =>{
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

                                <Button className='submit' disabled={bottoneDisabilitato(address, titolo, oraI, oraF, date, state.giorno, state.start, state.end, state.c)} variant='dark' onClick={() => {

                                    let calendarDate = moment(date).format('YYYY-MM-DD')
                                    let dataS=moment(calendarDate+', '+oraI,'YYYY-MM-DD, hh:mm a')
                                    let dataF=moment(calendarDate+', '+oraF,'YYYY-MM-DD, hh:mm a')

                                    let giornoI = moment(state.giorno+', '+state.start, 'YYYY-MM-DD, hh:mm a')
                                    let giornoF = moment(state.giorno+', '+state.end, 'YYYY-MM-DD, hh:mm a')

                                    if(state.c == 'false'){
                                        if(dataS.isBefore(moment()) || dataF.isBefore(moment())) {
                                            setBadge('precedente')
                                        }else{
                                            dispatch(addBooking(dataS,dataF,address,titolo,about,categoria))
                                            setAddress('')
                                            setTitolo('')
                                            setAbout('')
                                            setDate(moment())
                                            setOraI('')
                                            setOraF('')
                                            setCategoria('')
                                            setLS('true')
                                            setPR('true')
                                            dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), moment('','yyyy-MM-DD').format('LT'), moment('','yyyy-MM-DD').format('LT'), 'false'))
                                            handleShow()
                                        }
                                    }else if(state.c == 'true'){
                                        if(giornoI.isBefore(moment()) || giornoF.isBefore(moment())){
                                            setBadge('precedente')
                                        }else{
                                            dispatch(addBooking(dataS,dataF,address,titolo,about,categoria))
                                            setAddress('')
                                            setTitolo('')
                                            setAbout('')
                                            setDate(moment())
                                            setOraI('')
                                            setOraF('')
                                            setCategoria('')
                                            setLS('true')
                                            setPR('true')
                                            dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), moment('','yyyy-MM-DD').format('LT'), moment('','yyyy-MM-DD').format('LT'), 'false'))
                                            handleShow()
                                        }
                                    }
                                }}>Publish</Button>
                            </Card.Body>
                        </Card>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>

                    {ls=='true' ? localStorage.setItem('arrayLS', JSON.stringify(state.arrayLS)) : null}
                    {pr=='true' ? localStorage.setItem('prenotazioni', JSON.stringify(state.prenotazioni)) : null}

                    {badge=='conferma' ? <Alert variant={"success"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>PRENOTAZIONE AVVENUTA CON SUCCESSO!</Alert> : null}
                    {badge=='precedente' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>DATA PRECEDENTE!</Alert> : null}

                    <Row>
                        { state.id ?
                            <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/sintesi"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SINTESI PRENOTAZIONE</span></Link>
                            </Button> : null}
                    </Row>
                </Col>

                <Row className="justify-content-md-center">
                    <Col xs={3} sm={12} md={3}>
                        {
                            <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>Home</span></Link>
                            </Button>
                        }
                    </Col>

                    <Col xs={3} sm={12} md={3}>
                        {
                            <Button variant={"danger"} style={{marginTop: "5px", marginBottom: "5px"}} onClick={() => dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), moment('','yyyy-MM-DD').format('LT'), moment('','yyyy-MM-DD').format('LT'),'false'))}>
                                <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CALENDAR</span></Link>
                            </Button> }
                            <Button onClick={()=> console.log(state.c)}>+</Button>

                    </Col>
                </Row>


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
