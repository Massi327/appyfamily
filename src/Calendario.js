import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/en-gb';
import {useCallback, useContext, useState} from "react";
import {StateContext} from "./App";
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
    FormCheck
} from "react-bootstrap";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {addBooking, selected, selectedSlot} from "./Action";
import {Link, useNavigate} from "react-router-dom";

const localizer = momentLocalizer(moment)

export default function Calendario(){

    const [state,dispatch] = useContext(StateContext)

    const [address,setAddress] = useState('')
    const [titolo,setTitolo] = useState('')
    const [about,setAbout] = useState('')
    const [date,setDate] = useState(new Date())
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    const [sala,setSala] = useState('')
    const [badge,setBadge] = useState('')
    const [sel,setSel] = useState('')
    const [categoria,setCategoria] = useState('')

    const navigate = useNavigate();

    let events =[]
    state.sale.map(s =>{
        s.prenotazioni.map(p=> {
            let event={
                id: p.key,
                title: p.titolo,
                start: p.dataStart.toDate(),
                end: p.dataEnd.toDate(),
                resourceId: s.id,
                categoria: p.categoria
            }
            events.push(event)
        })
    })

    const resourceMap = [{resourceId: 1, resourceTitle: ''},]

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

    let selectSlot = (slotInfo) => {
        setSel('true')
        let giorno= moment(slotInfo.start)
        let start= moment(slotInfo.start, 'LT')
        giorno= moment(giorno).format('yyyy-MM-DD')
        start= moment(start).format('LT')
        setOraI(slotInfo.start)
        setDate(slotInfo.giorno)
        dispatch(selectedSlot(giorno, start, 'true'))
        setSala(1)

        navigate('/add', {replace: true})
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

            <Row style={{textAlign: "center"}}>
                <Col md={12} xs={12}>
                    <ButtonGroup>
                        <DropdownButton title="Category" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Sport</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Park</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Col>
            </Row>

            <Row>
                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
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
                        eventPropGetter= {(events) => {
                                let newStyle = {
                                    backgroundColor: "orange",
                                    color: 'black',
                                    borderRadius: "5px",
                                    border: "none"
                                };

                            if (events.categoria === 'Park'){
                                newStyle.backgroundColor = "green"
                            }

                                return {
                                    className: "",
                                    style: newStyle
                                };
                            }}
                        onSelectSlot={ slotInfo => selectSlot(slotInfo)}
                    />
                </Col>

                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
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



                                <Button className='submit' disabled={bottoneDisabilitato(address, titolo, oraI, oraF, date)} variant='dark' onClick={() => {

                                    let calendarDate = moment(date).format('YYYY-MM-DD')
                                    let dataS=moment(calendarDate+', '+oraI,'YYYY-MM-DD, hh:mm a')
                                    let dataF=moment(calendarDate+', '+oraF,'YYYY-MM-DD, hh:mm a')

                                    let oraISan=moment(oraI, 'hh:mm a').subtract(30, 'minutes')

                                    if(state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataStart.isSame(dataS)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataEnd.isSame(dataF)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> dataS.isBetween(p.dataStart,p.dataEnd)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> dataF.isBetween(p.dataStart,p.dataEnd)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataStart.isBetween(dataS,dataF)).length!==0 ||
                                        state.sale[Number(sala)-1].prenotazioni.filter(p=> p.dataEnd.isBetween(dataS,dataF)).length!==0 ){
                                        setBadge('occupata')
                                    }else if(dataS.isBefore(moment()) || dataF.isBefore(moment())) {
                                        setBadge('precedente')
                                    }else{
                                        dispatch(addBooking(Number(sala),dataS,dataF,address,titolo,about,categoria))
                                        setBadge('conferma')
                                        setSala('')
                                        setAddress('')
                                        setTitolo('')
                                        setAbout('')
                                        setDate(moment())
                                        setOraI('')
                                        setOraF('')
                                        setSel('')
                                        setCategoria('')
                                    }
                                }}>CONFERMA PRENOTAZIONE</Button>
                            </Card.Body>
                        </Card>
                    </Row>

                    {badge=='conferma' ? <Alert variant={"success"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>PRENOTAZIONE AVVENUTA CON SUCCESSO!</Alert> : null}
                    {badge=='occupata' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>STANZA OCCUPPATA!</Alert> : null}
                    {badge=='precedente' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>DATA PRECEDENTE!</Alert> : null}

                    <Row>
                        { state.id ?
                            <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/sintesi"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SINTESI PRENOTAZIONE</span></Link>
                            </Button> : null}
                    </Row>
                </Col>

                <Row className="justify-content-sm-center">
                    <Col xs={1} md={1}>
                        <Button variant={"dark"} style={{marginBottom:"1em"}}>
                            <Link to={"/add"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>+</span></Link>
                        </Button>
                    </Col>
                </Row>

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
                            <Button variant={"danger"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CALENDAR</span></Link>
                            </Button> }
                        </Col>

                            <Col xs={3} sm={12} md={3}>
                        {
                            <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/profile"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>PROFILE</span></Link>
                            </Button> }
                            </Col>

                                <Col xs={3} sm={12} md={3}>
                        {
                            <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/settings"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SETTINGS</span></Link>
                            </Button> }
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