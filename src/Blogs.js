import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import NavigbarBottom from "./components/navbar-bottom";
import AddButton from "./components/add-button";
import events from "./images/Events.svg";
import "./Blogs.css"

import people from "./images/People.svg";
import hashtags from "./images/Hashtags.svg";

import blogsselectd from "./images/Blogs-selezionato.svg";
import imgcard1 from "./images/Image-event-1.svg";
import clock from "./images/Clock.svg";
import map from "./images/Map.svg";
import imgcard2 from "./images/Image-event-2.svg";
import profile1 from "./images/profile1.svg";
import recbut from './images/recommended-button.svg'
import nearme from './images/near-me.svg'
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";


export default function Blogs(){

    const [state,dispatch] = useContext(StateContext)

    return(

        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'70vh', top:'5em'}}>
            <Navigbar vevents={events}
                      vblogs={blogsselectd}
                      vpeople={people}
                      vhashtags={hashtags}
                      value={"none"}
            />
            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>

            <Container style={{marginTop:'13em'}}>

                    <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                            <Card.Text>
                                <Row style={{height:"1em"}}>
                                    <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                        2 weeks ago • Sophia Wilkinson
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>

                                    </Col>
                                    <Col xs={3}>
                                        <Link className="reply">Reply</Link>
                                    </Col>
                                    <Col xs={5}>
                                        <Link className="reply">View 7 replies</Link>
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card className="people" style={{ top:"2em", height: '6.5rem', marginBottom: '0.3em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Body>
                        <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                        <Card.Text>
                            <Row style={{height:"1em"}}>
                                <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                    2 weeks ago • Sophia Wilkinson
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>

                                </Col>
                                <Col xs={3}>
                                    <Link className="reply">Reply</Link>
                                </Col>
                                <Col xs={5}>
                                    <Link className="reply">View 7 replies</Link>
                                </Col>
                            </Row>
                        </Card.Text>

                    </Card.Body>
                </Card>



                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>

                            <Card.Text>
                                <Row>
                                    <Col  xs={9} className="subtitle-connections" style={{textAlign:"left"}}>
                                        2 weeks ago • Sophia Wilkinson
                                    </Col>
                                    <Col>
                                        <Link className="reply"> Reply</Link>
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Card>


            </Container>

        </Container>
    )

}