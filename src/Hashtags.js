import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import Navigbar from "./components/navbar-search";
import AddButton from "./components/add-button";
import NavigbarBottom from "./components/navbar-bottom";
import events from "./images/Events.svg";
import forum from "./images/Forum-unselected.svg";
import people from "./images/People.svg";
import profile4 from "./images/profile4.svg";
import hashtag from "./images/hashtag.svg"
import home from "./images/Home-icon.svg";
import calendar from "./images/Calendar.svg";
import profile from "./images/Profile-unselected.svg";
import settings from "./images/Settings.svg";
import centersselected from "./images/centers-selected.svg";
import forums from "./images/Forums.svg"
import profile2 from "./images/profile2.svg";
import cusimage from "./images/CUS.svg"

import artattic from "./images/artattic.svg"
import musetheatre from "./images/musetheatre.svg"
import bounce from "./images/bounce.svg"

export default function Hashtags(){

    const [state,dispatch] = useContext(StateContext)

    return(
        <Container style={{backgroundColor:"#f5f5f5", zIndex:'-1000', minHeight:'70vh'}}>
            <Navigbar vevents={events}
                      vforum={forums}
                      vpeople={people}
                      vcenters={centersselected}
                      value={"none"}
            />

            <AddButton/>
            <NavigbarBottom home={home} calendar={calendar} profile={profile} settings={settings}/>

            <Container style={{paddingTop:'16em'}}>


                <Link to={"/centerevents"} style={{textDecoration:"none"}}>
                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={cusimage} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>CUS Torino</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Centro Universitario Sportivo
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>

                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={musetheatre} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>The Muse Theatre</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Music School
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={artattic} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Art attic!</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Art center
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="people" style={{height: '5rem', marginBottom: '1em' , borderRadius: '10px',borderWidth: '0', flexDirection: 'row'}}>
                    <Card.Img  src={bounce} style={{height: '4em', width: '4rem', marginLeft:'1em', marginTop:'0.5em'}} />
                    <Card.Body>
                        <Card.Text className="name-people" style={{textAlign: 'left'}}>Bounce</Card.Text>
                        <Card.Text className="subtitle-name" style={{textAlign: 'left'}}>
                            Gym
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>


        </Container>
    )

}