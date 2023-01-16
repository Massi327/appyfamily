import {useContext, useEffect, useState} from "react";
import {StateContext} from "./App";
import {Link, useNavigate} from "react-router-dom";
import {
    Button,
    Card,
    CloseButton,
    Col,
    Container,
    FormControl,
    FormGroup,
    FormLabel,
    Modal,
    Row
} from "react-bootstrap";
import NavigbarP from "./components/navbar-profile";
import moment from "moment/moment";
import {addBooking, addForum, selectedSlot} from "./Action";

export default function Addforum(){

    const [state,dispatch] = useContext(StateContext)

    const navigate = useNavigate()

    const [titolo,setTitolo] = useState('')
    // () => {const titolo = JSON.parse(localStorage.getItem('titolo'));return titolo || ""; } )
    const [about,setAbout] = useState('')

    const [fm,setFM] = useState('false')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container fluid>

            <NavigbarP/>

            <Row style={{marginTop:'10em'}}>
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
                                    <FormLabel className="subtitle">About *</FormLabel>
                                    <FormControl type='textarea' value={about} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='About' onChange={e=> setAbout(e.target.value)}/>
                                </FormGroup>

                                <Button onClick={() =>{
                                    setTitolo('')
                                    setAbout('')
                                }}>Cancel</Button>

                                <Button className='submit' disabled={bottoneDisabilitato(titolo, about)} variant='dark' onClick={() => handleShow()}>Publish</Button>

                            </Card.Body>
                        </Card>

                    </Row>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} backdrop={"static"} centered>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title className="modal-title-1">Add new forum</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="modal-subtitle-1">
                        <p>Are you sure you want to add this new forum?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={handleClose}
                        >Cancel</Button>
                        <Button style={{backgroundColor:"#eb506c", color:"white", borderWidth:"2px", borderColor:"#eb506c", borderRadius:"10px"}}
                                onClick={() => {
                                    dispatch(addForum(titolo, about))
                                    setTitolo('')
                                    setAbout('')
                                    setFM('true')
                                    navigate('/blogs', {replace: true})
                                }}
                        >Add</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            {fm=='true' ? localStorage.setItem('forums', JSON.stringify(state.forums)) : null}

                        <Button variant={"dark"} style={{marginTop: "5px", marginBottom: "5px"}}>
                            <Link to={"/blogs"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>Home</span></Link>
                        </Button>

        </Container>
    )
}

function bottoneDisabilitato(titolo, about) {
    let disabilitato = true;

    if(titolo!='' && about!='') disabilitato=false

    return(disabilitato)
}