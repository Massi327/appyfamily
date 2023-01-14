import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'moment/locale/it';
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
    FormCheck, Modal
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

    const [prenotaz, setPrenotaz] = useState(() => {
        const prenotaz = JSON.parse(localStorage.getItem('prenotazioni'));
        return prenotaz || state.prenotazioni; } )

    const addHidden = 'false';

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    let events = [];

    prenotaz.map(p => {
        let event={
            id: p.key,
            title: p.titolo,
            start: moment(p.dataStart,'YYYY-MM-DD, hh:mm').toDate(),
            end: moment(p.dataEnd,'YYYY-MM-DD, hh:mm').toDate(),
            categoria: p.categoria
        }
        events.push(event)
    })


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
                        <Button style={{margin: '10px'}} onClick={()=> localStorage.clear()}>clear</Button>
                        <Button onClick={()=> console.log(prenotaz)}>prenotaz</Button>
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
                        events={events}
                        style={{height:'81vh', backgroundColor: 'white', marginBottom: "5px", zIndex:'-1000'}}
                        onSelectEvent={e => {
                            dispatch(selected(e.id))
                            handleShow()
                        }}
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

                <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title className="modal-title-1">{prenotaz.filter(p => p.key===state.id).map(m=>m.titolo)}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-subtitle-1">
                            <p>{prenotaz.filter(p => p.key===state.id).map(m=>m.about)}</p>
                            <p>{prenotaz.filter(p => p.key===state.id).map(m=>m.address)}</p>
                            <p>{prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('D MMM YYYY'))}, {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataStart).locale('en').format('h:mm a'))} - {prenotaz.filter(p => p.key===state.id).map(m=>moment(m.dataEnd).locale('en').format('h:mm a'))}</p>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                    onClick={handleClose}
                            >Cancel</Button>
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

                <Row className="justify-content-sm-center">
                    <Col xs={1} md={1}>
                        <Button variant={"dark"} style={{marginBottom:"1em"}}>
                            <Link to={"/add"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>+</span></Link>
                        </Button>
                    </Col>
                </Row>

            </Row>


        </Container>
    )
}