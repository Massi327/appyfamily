import {useContext} from "react";
import {StateContext} from "./App";
import {Button, Card, Col, Container, FormLabel, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'moment/locale/en-gb';


export default function Sintesi(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container fluid style={{height:"79vh"}}>

            <Row className="justify-content-center" style={{margin:"1em"}}>
                <Col xs={12} sm={12} md={6}>
                    <br/>
                    <br/>
                    <br/>
                    <Card className='form' border='dark' style={{background: "lightgrey", color: "darkred"}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: "50px"}}>{state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].titolo.toUpperCase()}</Card.Title>
                            <br/>

                            <Row style={{fontSize:"25px"}}>
                                <FormLabel><b>Date:</b>
                                    <div>{state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].dataStart.format('D MMMM YYYY').toUpperCase()}</div>
                                    {state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].dataStart.format('LT')} - {state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].dataEnd.format('LT')}
                                </FormLabel>
                            </Row>
                            <br/>

                            <Row style={{fontSize:"25px"}}>
                                <FormLabel><b>Address:</b>
                                    <div>{state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].address.toUpperCase()}</div>
                                </FormLabel>
                                <FormLabel><b>About:</b>
                                    <div>{state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].about.toUpperCase()}</div>
                                </FormLabel>
                                <FormLabel><b>Prova:</b>
                                    <div>{state.sale.filter(s=>s.id===state.rid)[0].prenotazioni.filter(p=>p.key===state.id)[0].prova}</div>
                                </FormLabel>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={6}>
                    <Button variant={"dark"} style={{marginBottom:"1em"}}>
                        <Link to={"/home"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>HOME</span></Link>
                    </Button>
                </Col>

                <Col xs={3} sm={12} md={3}>
                    {
                        <Button variant={"danger"} style={{marginTop: "5px", marginBottom: "5px"}}>
                            <Link to={"/calendar"} style={{color: "white", textDecoration: "none"}}><span style={{margin: "0.5em"}}>CALENDAR</span></Link>
                        </Button> }
                </Col>
            </Row>


        </Container>

    )

}