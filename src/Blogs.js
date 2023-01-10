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


export default function Blogs(){

    const [state,dispatch] = useContext(StateContext)

    return(

        <Container  style={{backgroudColor:"f5f5f5"}}>
            <Navigbar vevents={events}
                      vblogs={blogsselectd}
                      vpeople={people}
                      vhashtags={hashtags}/>
            <AddButton/>
            <NavigbarBottom value="Home"/>

            <Container className="background2">

                <Container style={{backgroudColor:"white", width:"85vw", top:"14em"}}>
                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="blog-title" style={{textAlign: 'left'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>
                            <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                                2 weeks ago • Sophia Wilkinson
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="name-people" style={{textAlign: 'left', width: '18rem'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>
                            <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                                2 weeks ago • Sophia Wilkinson
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="name-people" style={{textAlign: 'left', width: '18rem'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>
                            <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                                2 weeks ago • Sophia Wilkinson
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="name-people" style={{textAlign: 'left', width: '18rem'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>
                            <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                                2 weeks ago • Sophia Wilkinson
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="people" style={{ width: '21rem', height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Text className="name-people" style={{textAlign: 'left', width: '18rem'}}>Activity ideas for my 6 months old child during long car trips?</Card.Text>
                            <Card.Text className="subtitle-connections" style={{textAlign: 'left'}}>
                                2 weeks ago • Sophia Wilkinson
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>


            </Container>

        </Container>
    )

}