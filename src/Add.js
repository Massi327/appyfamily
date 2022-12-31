import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/it';
import {useContext, useState} from "react";
import {StateContext} from "./App";
import {
    Alert,
    Button,
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
import {addBooking, selected} from "./Action";
import {Link} from "react-router-dom";

const localizer = momentLocalizer(moment)

export default function Add(){

    const [state,dispatch] = useContext(StateContext)

    const [nome,setNome] = useState('')
    const [scopo,setScopo] = useState('')
    const [date,setDate] = useState(new Date())
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    const [sala,setSala] = useState('')
    const [badge,setBadge] = useState('')
    const [sel,setSel] = useState('')
    const calendariohidden = 'false';

    let events =[]
    state.sale.map(s =>{
        s.prenotazioni.map(p=> {
            let event={
                id: p.key,
                title: p.scopo,
                start: p.dataStart.toDate(),
                end: p.dataEnd.toDate(),
                resourceId: s.id
            }
            events.push(event)
        })
    })

    const resourceMap = [
        {resourceId: 1, resourceTitle: 'Sala 1'},
        {resourceId: 2, resourceTitle: 'Sala 2'},
        {resourceId: 3, resourceTitle: 'Sala 3'},
        {resourceId: 4, resourceTitle: 'Sala 4'},
        {resourceId: 5, resourceTitle: 'Sala 5'}
    ]

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
        setSala(range.resourceId)
    }

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
                        resources={resourceMap}
                        resourceIdAccessor='resourceId'
                        resourceTitleAccessor='resourceTitle'
                        onSelectEvent={e => {dispatch(selected(e.id, e.resourceId))}}
                        onSelecting={range => handleSelect(range)}
                    />
                </Col> : null}

                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row>

                        <Card className='form' border='dark' style={{background: 'linear-gradient(to top, red 10%, black 100%)', color: "white"}}>
                            <Card.Body>
                                <Card.Title style={{fontSize: "30px"}}>PRENOTAZIONE STANZE</Card.Title>
                                <FormGroup style={{marginBottom: "10px"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col lg={3} md={4} s={12} xs={12}>
                                            <FormLabel><b>Stanza</b></FormLabel>
                                            <FormSelect value={sala} style={{textAlign:"center"}} onChange={e=> setSala(e.target.value)}>
                                                <option id={0}>---</option>
                                                <option id={1}>1</option>
                                                <option id={2}>2</option>
                                                <option id={3}>3</option>
                                                <option id={4}>4</option>
                                                <option id={5}>5</option>
                                            </FormSelect>
                                        </Col>
                                        <Col lg={7} md={8} xs={12} s={12}>
                                            <FormLabel><b>Giorno</b></FormLabel>
                                            <FormControl type='date' value={date} style={{textAlign:"center"}} onChange={e => setDate(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup style={{marginBottom: "10px"}}>
                                    <Row className={"justify-content-center"}>
                                        <Col lg={5} md={5} xs={12}>
                                            <FormLabel><b>Inizio</b></FormLabel>
                                            <FormControl type='time' value={oraI} style={{textAlign:"center"}} onChange={e => setOraI(e.target.value)}/>
                                        </Col>
                                        <Col lg={5} md={5} xs={12}>
                                            <FormLabel><b>Fine</b></FormLabel>
                                            <FormControl type='time' value={oraF} style={{textAlign:"center"}} onChange={e => setOraF(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup style={{marginBottom: "10px"}}>
                                    <FormLabel><b>Scopo e Referente</b></FormLabel>
                                    <FormControl type='text' value={scopo} style={{textAlign:"center"}} placeholder='Conquistare il mondo è sempre il nostro scopo!' onChange={e=> setScopo(e.target.value)}/>
                                    <br/>
                                    <FormControl type='text' value={nome} style={{textAlign:"center"}} placeholder='Nome Referente' onChange={e=> setNome(e.target.value)}/>
                                </FormGroup>

                                <Button className='submit' variant='dark' onClick={() => {

                                    let calendarDate = moment(date).format('YYYY-MM-DD')
                                    let dataS=moment(calendarDate+', '+oraI,'YYYY-MM-DD, hh:mm a')
                                    let dataF=moment(calendarDate+', '+oraF,'YYYY-MM-DD, hh:mm a')

                                    let oraISan=moment(oraI, 'hh:mm a').subtract(30, 'minutes')

                                    if(nome==='' || scopo==='' || oraI===null || oraF==='' || sala==='---' || date===''){
                                        setBadge('form')
                                    }else if(state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataStart.isSame(dataS)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataEnd.isSame(dataF)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> dataS.isBetween(p.dataStart,p.dataEnd)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> dataF.isBetween(p.dataStart,p.dataEnd)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataStart.isBetween(dataS,dataF)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataEnd.isBetween(dataS,dataF)).length!==0 ){
                                        setBadge('occupata')
                                    }else if(dataS.isBefore(moment()) || dataF.isBefore(moment())) {
                                        setBadge('precedente')
                                    }else if(state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataEnd.isSame(oraISan)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> oraISan.isBefore(p.dataEnd)).length!==0){
                                        setBadge('sanitaria')
                                    }else {
                                        dispatch(addBooking(Number(sala),dataS,dataF,nome,scopo))
                                        setBadge('conferma')
                                        setSala('')
                                        setNome('')
                                        setScopo('')
                                        setDate(moment())
                                        setOraI('')
                                        setOraF('')
                                        setSel('')
                                    }
                                }}>CONFERMA PRENOTAZIONE</Button>
                            </Card.Body>
                        </Card>
                    </Row>

                    {badge=='conferma' ? <Alert variant={"success"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>PRENOTAZIONE AVVENUTA CON SUCCESSO!</Alert> : null}
                    {badge=='sanitaria'? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>ASPETTA 30 MIN PRIMA DI PRENOTARE! QUESTIONI SANITARIE</Alert> : null}
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
                </Row>

            </Row>

        </Container>
    )
}