import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/it';
import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
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
    FormSelect, Nav,
    Navbar,
    Row
} from "react-bootstrap";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {addBooking, selected, selectedSlot} from "./Action";
import {Link} from "react-router-dom";
import {initialState} from "./Reducer";

const localizer = momentLocalizer(moment)

export default function Add(){

    const [state,dispatch] = useContext(StateContext)

    const [address,setAddress] = useState('')
    const [titolo,setTitolo] = useState(() => {
        const titolo = JSON.parse(localStorage.getItem('titolo'));
       return titolo || ""; } )
    const [about,setAbout] = useState('')
    const [date,setDate] = useState(new Date())
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    const [sala,setSala] = useState(1)
    const [badge,setBadge] = useState('')
    const [sel,setSel] = useState('')
    const [categoria,setCategoria] = useState('')
    const calendariohidden = 'false';

    const [ls,setLS] = useState('false')

    let events =[]
    state.prenotazioni.map(p=> {
            let event={
                id: p.key,
                title: p.titolo,
                start: p.dataStart.toDate(),
                end: p.dataEnd.toDate(),
            }
            events.push(event)
        })

    useEffect(() => {
        localStorage.setItem('titolo', JSON.stringify(titolo))
    }, [titolo])

    return(
        <Container fluid>

            <Navbar style={{overflow: "hidden", top: "0px", width: "100%"}} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">APPy Family</Navbar.Brand>
                    <Nav>
                        <Nav.Link style={{textAlign: "right"}} href="/notifications">Notifications</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="/messages">Messages</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="/tutorial">Tutorial</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

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
                        events={events}
                        style={{height:'81vh', backgroundColor: 'white', marginBottom: "5px"}}
                        onSelectEvent={e => {dispatch(selected(e.id, e.resourceId))}}
                    />
                </Col> : null}

                <Col md={6} sm={12} xs={12}>
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

                                        {state.categoriav.map(cat => (
                                            <option key={Math.random()} value={cat.value}>{cat}</option>
                                        ))}

                                    </FormSelect>
                                </FormGroup>

                                {state.c == 'false' ? <FormGroup style={{marginBottom: "10px"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col md={12} xs={12}>
                                            <FormLabel><b>Day*</b></FormLabel>
                                            <FormControl type='date' value={date} style={{textAlign:"center"}} onChange={e => setDate(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup> :
                                    <FormGroup style={{marginBottom: "10px"}}>
                                        <Row className={"justify-content-center"}>
                                            <Col md={12} xs={12}>
                                                <FormLabel><b>Day*</b></FormLabel>
                                                <FormControl type='date' value={state.giorno} style={{textAlign:"center"}} onChange={e => {setDate(e.target.value)
                                                    dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), state.start, 'false'))
                                                    setOraI(state.start)}}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>}

                                {state.c == 'false' ? <FormGroup style={{marginBottom: "10px"}}>
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
                                </FormGroup> : <FormGroup style={{marginBottom: "10px"}}>
                                        <Row className={"justify-content-center"}>
                                            <Col lg={5} md={5} xs={12}>
                                                <FormLabel><b>Start*</b></FormLabel>
                                                <FormControl type='time' value={state.start} style={{textAlign:"center"}} onChange={e => {setOraI(e.target.value)
                                                    dispatch(selectedSlot(state.giorno, moment('','yyyy-MM-DD').format('LT'), 'false'))
                                                    setDate(state.giorno)}}/>
                                            </Col>
                                            <Col lg={5} md={5} xs={12}>
                                                <FormLabel><b>End*</b></FormLabel>
                                                <FormControl type='time' value={oraF} style={{textAlign:"center"}} onChange={e => setOraF(e.target.value)}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>}



                                <Button className='submit' disabled={bottoneDisabilitato(address, titolo, oraI, oraF, date)} variant='dark' onClick={() => {

                                    let calendarDate = moment(date).format('YYYY-MM-DD')
                                    let dataS=moment(calendarDate+', '+oraI,'YYYY-MM-DD, hh:mm a')
                                    let dataF=moment(calendarDate+', '+oraF,'YYYY-MM-DD, hh:mm a')

                                    let oraISan=moment(oraI, 'hh:mm a').subtract(30, 'minutes')

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
                                        setSel('')
                                        setCategoria('')
                                        setLS('true')
                                        dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), moment('','yyyy-MM-DD').format('LT'), 'false'))
                                    }
                                }}>CONFERMA PRENOTAZIONE</Button>
                            </Card.Body>
                        </Card>
                    </Row>

                    {ls=='true' ? localStorage.setItem('arrayLS', JSON.stringify(state.arrayLS)) : null}

                    {badge=='conferma' ? <Alert variant={"success"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>PRENOTAZIONE AVVENUTA CON SUCCESSO!</Alert> : null}
                    {badge=='form' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>FORM COMPLETAMENTE/PARZIALMENTE VUOTO!</Alert> : null}
                    {badge=='occupata' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>STANZA OCCUPPATA!</Alert> : null}
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
                            <Button variant={"danger"} style={{marginTop: "5px", marginBottom: "5px"}} onClick={() => dispatch(selectedSlot(moment('').format('yyyy-MM-DD'), moment('','yyyy-MM-DD').format('LT'), 'false'))}>
                                <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CALENDAR</span></Link>
                            </Button> }
                        <ButtonGroup>
                            <Button onClick={()=> console.log(state.arrayLS)}>+</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button onClick={()=> console.log(state.prenotazioni)}>+</Button>
                        </ButtonGroup>
                    </Col>
                </Row>


            </Row>

        </Container>
    )
}

function bottoneDisabilitato(address, titolo, oraI, oraF, date) {
    let disabilitato;

    if (address!='' && titolo!='' && oraI!=null && oraF!='' && date!='')
    {
        disabilitato= false;
    }else {
        disabilitato= true;
    }

    return(disabilitato)
}
