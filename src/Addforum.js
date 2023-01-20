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
import notif from "./images/notifications-icon.svg";
import message from "./images/messages-icon.svg";
import help from "./images/help-icon.svg";

export default function Addforum(){

    const [state,dispatch] = useContext(StateContext)

    const navigate = useNavigate()

    const [titolo,setTitolo] = useState(() => {const titolo = JSON.parse(localStorage.getItem('title'));return titolo || ""; } )

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_second, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    useEffect(() => {
        localStorage.setItem('title', JSON.stringify(titolo))
    }, [titolo])

    return(
        <Container fluid>

            <NavigbarP vnotifications={notif} vmessages={message} vtutorial={help}/>

            <Row style={{paddingTop:'10em', background: '#f5f5f5', minHeight:"100vh"}}>
                <Col md={6} sm={12} xs={12}>
                    <Row>

                        <Card className='form' style={{background: '#f5f5f5', color: "black", borderWidth: "0"}}>
                            <Card.Body style={{marginLeft:"1em", marginRight:"1em"}}>
                                <CloseButton variant={'black'} onClick={() =>{ setTitolo(''); navigate(-1);} }/>
                                <Card.Title style={{fontSize: "30px", marginTop: "0.3em"}} className="title-2">Add forum</Card.Title>

                                <FormGroup style={{marginBottom: "10px", textAlign: "left"}}>
                                    <FormLabel className="subtitle">Title *</FormLabel>
                                    <FormControl type='text' value={titolo} style={{textAlign:"left", backgroundColor:"#f5f5f5", borderTop:"0px", borderRight:"0px", borderLeft:"0px", borderColor:"#a7a7a7", borderRadius:"0px"}} placeholder='Title' onChange={e=> setTitolo(e.target.value)}/>
                                </FormGroup>

                                <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}} onClick={() =>{
                                    setTitolo('')
                                }}>Cancel</Button>

                                <Button style={{backgroundColor:"#eb506c", color:"white", borderWidth:"2px", borderColor:"#eb506c", borderRadius:"10px"}} disabled={bottoneDisabilitato(titolo)} onClick={() => handleShow()}>Publish</Button>

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
                                    dispatch(addForum(titolo))
                                    setTitolo('')
                                    handleClose()
                                    handleShowSecond()
                                }}
                        >Add</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Modal show={show_second} onHide={handleCloseSecond} backdrop={"static"} centered>
                <Modal.Dialog>

                    <Modal.Body className="modal-subtitle-1">
                        <p>Added</p>
                    </Modal.Body>

                    <Modal.Footer>

                        <Button style={{borderColor:"#eb506c", color:"#eb506c", borderWidth:"2px", backgroundColor:"#f5f5f5", borderRadius:"10px", marginRight:"0.5em"}}
                                onClick={localStorage.setItem('forums', JSON.stringify(state.forums))}
                        >
                            <Link to={"/blogs"}>
                                Ok
                            </Link>
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>



        </Container>
    )
}

function bottoneDisabilitato(titolo) {
    let disabilitato = true;

    if(titolo!='') disabilitato=false

    return(disabilitato)
}