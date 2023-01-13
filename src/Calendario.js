import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/en-in';
import {useCallback, useContext, useEffect, useState} from "react";
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
    FormCheck
} from "react-bootstrap";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {addBooking, selected, selectedSlot} from "./Action";
import {Link, useNavigate} from "react-router-dom";
import NavigbarBottom from "./components/navbar-bottom";
import NavigbarP from "./components/navbar-profile";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";

const localizer = momentLocalizer(moment)

export default function Calendario(){

    const [state,dispatch] = useContext(StateContext)

    const [address,setAddress] = useState('')
    const [titolo,setTitolo] = useState('')
    const [about,setAbout] = useState('')
    const [date,setDate] = useState(new Date())
    const [oraI,setOraI] = useState('')
    const [oraF,setOraF] = useState('')
    //const [sala,setSala] = useState(1)
    const [badge,setBadge] = useState('')
    const [sel,setSel] = useState('')
    const [categoria,setCategoria] = useState('')

    const [eventi, setEventi] = useState(() => {
        const eventi = JSON.parse(localStorage.getItem('arrayLS'));
        return eventi || state.arrayLS; } )

    const addHidden = 'false';

    const navigate = useNavigate();

    {/*let events = [];

    state.prenotazioni.map(p => {
        let event={
            id: p.key,
            title: p.titolo,
            start: p.dataStart.toDate(),
            end: p.dataEnd.toDate(),
            categoria: p.categoria
        }
        events.push(event)
    })*/}


    //const resourceMap = [{resourceId: 1, resourceTitle: ''},]

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

    return(
        <Container>
             <NavigbarP/>
            <NavigbarBottom value="Home"/>

            <Row style={{textAlign: "center", marginTop:'6em'}}>
                <Col md={12} xs={12}>
                    <ButtonGroup>
                        <Button onClick={()=> localStorage.clear()}>+</Button>
                    </ButtonGroup>
                </Col>
            </Row>

            <br/>
            <br/>

            <Row style={{zIndex:'-5'}}>
                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Calendar
                        selectable
                        startAccessor='start'
                        endAccessor='end'
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView={'month'}
                        views={['month','week','day']}
                        events={eventi}
                        style={{height:'81vh', backgroundColor: 'white', marginBottom: "5px", zIndex:'-1000'}}
                        onSelectEvent={e => {dispatch(selected(e.id, e.resourceId))}}
                        onSelecting={range => handleSelect(range)}
                        eventPropGetter= {(eventi) => {
                                let newStyle = {
                                    backgroundColor: "orange",
                                    color: 'black',
                                    borderRadius: "5px",
                                    border: "none"
                                };

                            if (eventi.categoria === 'Park'){
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

                    {badge=='conferma' ? <Alert variant={"success"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>PRENOTAZIONE AVVENUTA CON SUCCESSO!</Alert> : null}
                    {badge=='occupata' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>STANZA OCCUPPATA!</Alert> : null}
                    {badge=='precedente' ? <Alert variant={"danger"} style={{marginTop: "10px", marginBottom: "5px"}}><CloseButton style={{float:"left"}} onClick={() => setBadge('')}/>DATA PRECEDENTE!</Alert> : null}

                    <Row>
                        { state.id ?
                            <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                                <Link to={"/sintesi"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>SINTESI PRENOTAZIONE</span></Link>
                            </Button> : null}
                    </Row>
                </Col> : null}

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

            {state.prenotazioni.map( p =>

                <Card className="post" id={p.key} style={{ height: '8rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img className="cardimg" src={imgcard1} style={{height: '8em', width: '10rem', verticalAlign:'center'}} />
                    <Card.Body>
                        <Card.Text className="event-time-1" style={{textAlign: 'left'}}>{p.dataStart.format('MMM Do').toUpperCase()}JAN 7 • 10AM</Card.Text>
                        <Card.Title className="event-title-1" style={{textAlign: 'left'}}>{p.titolo}</Card.Title>
                        <Card.Text className="event-subtitle-1" style={{textAlign: 'left'}}>
                            {p.about}
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={clock} alt="Near me" className="icon"/> 7 Jan 2023, 10AM - 11AM
                        </Card.Text>
                        <Card.Text className="event-subsubtitle-2" style={{textAlign: 'left'}}>
                            <img src={map} alt="Near me" className="icon"/> 112 Barrack Street, NR3 1TX, UK
                        </Card.Text>
                    </Card.Body>
                </Card>

            )}

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